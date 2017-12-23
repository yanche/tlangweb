
CALL node node_modules/less/bin/lessc src/style.less src/style.css
CALL node node_modules/jade/bin/jade.js src/index.jade
CALL tsc
CALL node node_modules/webpack/bin/webpack.js
