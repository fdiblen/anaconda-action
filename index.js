const core = require('@actions/core');
const github = require('@actions/github');
const conda = require('./conda');

try {
    // inputs
    const envFileName = core.getInput('envFileName');
    console.log(`Environment file: ${envFileName}!`);

    // outputs
    const time = (new Date()).toTimeString();
    core.setOutput("actionTime", time);

    // conda functions
    conda.check_dependencies();
    conda.get_miniconda();

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}