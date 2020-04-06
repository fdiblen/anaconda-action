# Anaconda-Action

This action tests anaconda environments, builds anaconda packages and pushes anaconda packages to anaconda cloud.

## Inputs

### `envFileName`

**Required** The name of anaconda environment file name. Default `"environment.yml"`.

### `pythonVersion`


### `channels`


### `activateEnv`


## Outputs

### `time`

The time the action was executed you.

### `conda_version`

Anaconda version used in the action.

### `python_version`

Python version used in the action.

## Example usage

uses: actions/anaconda-action@v1
with:
  envFileName: 'environment.yml'

## Local testing
To test the action locally, you can use [act](https://github.com/nektos/act).