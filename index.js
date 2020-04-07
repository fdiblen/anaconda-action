const core = require('@actions/core');
const github = require('@actions/github');
const conda = require('./conda');
const utils = require('./utils');

try {
    // inputs
    const envName = core.getInput('envName');
    const envFileName = core.getInput('envFileName');
    const pythonVersion = core.getInput('pythonVersion');
    const channels = core.getInput('channels');
    const activateEnv = core.getInput('activateEnv');
    const publish = core.getInput('publish');
    const publishChannel = core.getInput('publishChannel');
    const anacondaToken = core.getInput('anacondaToken');


    // check inputs and files


    // conda functions
    conda.check_dependencies();
    conda.setup_miniconda();
    if ( !utils.isEmpty(envFileName) ) {
        utils.file_exists(envFileName);
        console.log(`Environment file: ${envFileName}!`);
        conda.create_environment(envFileName, envName);
    }
    conda.list_environments();
    console.log(`activateEnv: ${activateEnv}!`);
    if (activateEnv) conda.activate_environment(envName);


    // outputs
    const time = (new Date()).toTimeString();
    core.setOutput("actionTime", time);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}