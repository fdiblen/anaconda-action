# Conda Tools

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `envFileName`

**Required** The name of conda environment file name. Default `"environment.yml"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/conda-tools@v1
with:
  envFileName: 'environment.yml'