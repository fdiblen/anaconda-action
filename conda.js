var shell = require('shelljs');

module.exports = {
    check_dependencies: function () {
        if (!shell.which('curl')) {
            shell.echo('Sorry, this script requires curl');
            // shell.exit(1);
        } else {
            shell.echo('Found curl');
            var curl_version = shell.exec('curl --version', {silent:true}).stdout;
            console.log(curl_version)
        }

        // Run external tool synchronously
        if (shell.exec('ls -asl').code !== 0) {
            shell.echo('Error: ls command failed');
            shell.exit(1);
        }
    }
};