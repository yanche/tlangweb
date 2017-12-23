
import { compile, CompileOutputFlag } from "@belongs/compiler/src/language/tlang"
import { Program } from "@belongs/mipsim/program"
import { use as mipsConsoleUse } from "@belongs/mipsim/console"

const tlangEditor = document.getElementById("tlang-editor") as HTMLTextAreaElement;
const mipsEditor = document.getElementById("mips-editor") as HTMLTextAreaElement;
const consoleElem = document.getElementById("console-area");
const btnCompile = document.getElementById("btn-compile");
const btnRun = document.getElementById("btn-run");
const btnClearConsole = document.getElementById("btn-clear-console");
const clickEvtName = "click";

mipsConsoleUse((input: string | number) => {
    consoleWrite(input);
});

btnCompile.addEventListener(clickEvtName, () => {
    const compret = compile(getTLangCode(), CompileOutputFlag.MIPS);
    if (compret.error) {
        consoleWrite(compret.error.errMsg + "\n");
        console.error(compret.error.errMsg);
    } else {
        setMIPSCode(compret.mips);
    }
});

btnRun.addEventListener(clickEvtName, () => {
    const mipsCode = getMipsCode().replace(/\r/g, "").split("\n");
    const program = new Program(mipsCode);
    program.run();
});

btnClearConsole.addEventListener(clickEvtName, () => {
    consoleElem.textContent = "";
});

function consoleWrite(text: any): void {
    consoleElem.textContent += text;
    consoleElem.scrollTop = Number.MAX_SAFE_INTEGER;
}

function setMIPSCode(mips: string): void {
    mipsEditor.value = mips;
}

function getTLangCode(): string {
    return tlangEditor.value;
}

function getMipsCode(): string {
    return mipsEditor.value;
}
