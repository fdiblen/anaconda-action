const core = require('@actions/core');
const github = require('@actions/github');
const conda = require('./conda');

try {
    // inputs
    const nameToGreet = core.getInput('env-file-name');
    console.log(`Environment file: ${env-file-name}!`);

    // outputs
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    // conda functions
    conda.test();

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}