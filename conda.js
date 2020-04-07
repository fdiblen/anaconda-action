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

    setup_miniconda: function () {
        const _mc_repo = 'https://repo.continuum.io/miniconda/'
        const _mc_script = 'Miniconda3-latest-Linux-x86_64.sh'
        const _get_opts = ' -O ./miniconda.sh'

        // Run external tool synchronously
        console.log('Download miniconda')
        console.log('\n----------------------');
        if (shell.exec('wget ' + _mc_repo + _mc_script + _get_opts).code !== 0) {
            shell.echo('Error: download failed');
            shell.exit(1);
        }
        console.log('Run installer')
        console.log('\n----------------------');
        if (shell.exec('bash ./miniconda.sh -b -p ~/miniconda && rm -f ./miniconda.sh').code !== 0) {
            shell.echo('Error: conda installation failed');
            shell.exit(1);
        }
        console.log('Display conda info')
        console.log('\n----------------------');
        if (shell.exec('conda info').code !== 0) {
            shell.echo('Error: conda info failed');
            shell.exit(1);
        }
    },

    create_environment: function (env_file, env_name) {
        var _file_opts = ' --file=' + env_file
        var _name_opts = ' --name ' + env_name
        if (shell.exec('conda env create ' + _name_opts + _file_opts).code !== 0) {
            shell.echo('Error: Environment creation failed');
            shell.exit(1);
        }
    },

    activate_environment: function (env_name) {
        if (shell.exec('. ~/miniconda/etc/profile.d/conda.sh;' + 'conda activate ' + env_name).code !== 0) {
            shell.echo('Error: Conda init failed');
            shell.exit(1);
        }
        // // if (shell.exec('conda init bash').code !== 0) {
        // //     shell.echo('Error: Conda init failed');
        // //     shell.exit(1);
        // // }
        // if (shell.exec('conda activate ' + env_name).code !== 0) {
        //     shell.echo('Error: Cannot activate the environment');
        //     shell.exit(1);
        // }

        // var cmd = 'source ~/miniconda/etc/profile.d/conda.sh; source ~/.bash_profile; ' +
        // 'conda activate  "' + env_name + '"; '
        // shell.echo(cmd);
        // shell.exec(cmd, { async: false, maxBuffer: 200 * 1024 * 1024 });

    },

    list_environments: function () {
        if (shell.exec('conda env list').code !== 0) {
            shell.echo('Error: Cannot get environment list');
            shell.exit(1);
        }
    }
};