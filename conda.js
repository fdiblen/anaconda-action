var shell = require('shelljs');

shell.set('-e');

module.exports = {

    check_exe: function (exe_name) {
        console.log('\n----------------------');
        if (!shell.which(exe_name)) {
            shell.echo('Sorry, this script requires ', exe_name);
            shell.exit(1);
        } else {
            shell.echo('Found ', exe_name);
            var exe_version = shell.exec(exe_name + ' --version', {silent:true}).stdout;
            console.log(exe_version)
        }
    },

    check_dependencies: function () {
        var vm = this;
        _dependencies = ['curl', 'bash', 'wget']
        _dependencies.forEach(function (_dep) {
            vm.check_exe(_dep);
        });
    },

    get_miniconda: function () {
        const _mc_repo = 'https://repo.continuum.io/miniconda/'
        const _mc_script = 'Miniconda3-latest-Linux-x86_64.sh'
        const _get_opts = ' -O ./miniconda.sh'

        // Run external tool synchronously
        if (shell.exec('wget ' + _mc_repo + _mc_script + _get_opts).code !== 0) {
            shell.echo('Error: download failed');
            shell.exit(1);
        }

        if (shell.exec('bash ~/miniconda.sh -b -p ~/miniconda && rm -f ~/miniconda.sh').code !== 0) {
            shell.echo('Error: conda installation failed');
            shell.exit(1);
        }
    }
};