let fs = require('fs');
let reloadFn = function() {
    window.location.reload();
    this.close();
}

fs.watch('./', reloadFn);
fs.watch('./app/', reloadFn);
fs.watch('./app/dev', reloadFn);
fs.watch('./app/nodes', reloadFn);
fs.watch('./app/services', reloadFn);