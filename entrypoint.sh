#!/bin/bash
# set -Eeuxo pipefail
set -ex

get_versions() {
    conda_version=$(conda --version | cut -d " " -f2)
    python_version=$(python --version | cut -d " " -f2)
}

check_file_exists () {
    if [ ! -f $1 ]; then
        echo "$1 does not exist!"
        exit 1
    else
        echo "Found $1."
    fi
}

check_env_file() {
    if [ ! -z $INPUT_ENVFILENAME ]; then
        echo "environment file is defined."
        echo $INPUT_ENVFILENAME
    fi
    check_file_exists "$INPUT_ENVFILENAME"
}

show_args() {
    echo "Printing arguments:"
    for i in $*; do
    echo $i
    done
}

time=$(date)
get_versions
check_env_file
show_args

echo "::set-output name=time::$time"
echo "::set-output name=conda_version::$conda_version"
echo "::set-output name=python_version::$python_version"

# if <condition> ; then
#   echo "Failed! Game over!"
#   exit 1
# fi