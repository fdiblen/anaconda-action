# Anaconda-Action

This action tests anaconda environments, builds anaconda packages and pushes anaconda packages to anaconda cloud.

## Inputs

### `envName`

**Required** The name of anaconda environment. Default `"environment.yml"`.

### `envFileName`

**Required** The name of anaconda environment file. Default `"environment.yml"`.

### `pythonVersion`

**Optional** Desired Python version to create a conda environment.

### `channels`

**Optional** Extra anaconda channels to use.


### `activateEnv`

**Optional** Activate the new environment

### `publish`

**Optional** Enable package publishing.

### `publishChannel`

**Optional** Channel to publish the anaconda package.

### `anacondaToken`

**Optional** Token to access to anaconda cloud.

## Outputs

### `actionTime`

The time the action was executed you.

### `conda_version`

Conda version used in the action.

### `python_version`

Python version used in the action.

## Example usage

```workflow
name: 'Anaconda Github Action'

on: [push]

jobs:
  test_job:
    runs-on: ubuntu-latest
    name: A simple test job
    steps:
    - uses: actions/checkout@v2
    - name: Anaconda-Action
      id: step1
      uses: fdiblen/anaconda-action@0.1.7
      with:
        envFileName: 'environment.yml'
```

## Local testing
To test the action locally, you can use [act](https://github.com/nektos/act).