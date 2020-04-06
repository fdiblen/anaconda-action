# Anaconda-Action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `envFileName`

**Required** The name of anaconda environment file name. Default `"environment.yml"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/anaconda-action@v1
with:
  envFileName: 'environment.yml'

## Local testing
To test the action locally, you can use [act](https://github.com/nektos/act).