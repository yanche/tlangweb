
import { compile, CompileOutputFlag } from "@belongs/compiler/src/language/tlang"

const tlangEditor = document.getElementById("tlang-editor") as HTMLTextAreaElement;
const mipsEditor = document.getElementById("mips-editor") as HTMLTextAreaElement;
const consoleElem = document.getElementById("console-area");
const btnCompile = document.getElementById("btn-compile");
// const btnRun = document.getElementById("btn-run");
const clickEvtName = "click";

btnCompile.addEventListener(clickEvtName, () => {
    const compret = compile(getTLangCode(), CompileOutputFlag.MIPS);
    if (compret.error) {
        consoleWriteLine(compret.error.errMsg);
        console.error(compret.error.errMsg);
    } else {
        setMIPSCode(compret.mips);
    }
});

function consoleWriteLine(text: string): void {
    consoleElem.textContent += text + "\n";
}

function setMIPSCode(mips: string): void {
    mipsEditor.value = mips;
}

function getTLangCode(): string {
    return tlangEditor.value;
}
