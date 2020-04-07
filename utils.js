var shell = require('shelljs');

shell.set('-e');

module.exports = {

    file_exists : function (path) {
        if (shell.test('-f', path)) {
            console.log('Found file: ', path)
        } else {
            shell.echo('File does not exist: ', path);
            shell.exit(1);
        }
    },

    isEmpty : function (variable) {
        if (variable === '' || variable === undefined || variable === null) {
            shell.echo('Variable should have a value ', variable);
            // shell.exit(1);
            return true;
        }
    }

};