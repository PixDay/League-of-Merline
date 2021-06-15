#!/bin/sh

if [ $# -lt 1 ]
then
    echo "Usage: $0 [SERVICE_NAME] [--debug | --release]"
    exit
fi

function service_path {
    SERVICE_PATH="src/services/$1/app.ts"
    if [ ! -f $SERVICE_PATH ]
    then
        echo "Error: $1 service not found"
        exit
    fi
}

function start {
    npx ts-node $1
}

function start_debug {
    nodemon --exec ts-node $1 --watch src --project ./tsconfig.json
}

if [ $# = 2 ]
then
    MODE=$2
elif [ -z $DEBUG ]
then
    MODE="--release"
elif [ $DEBUG = "True" ]
then
    MODE="--debug"
else
    MODE="--release"
fi

SERVICE=$1
service_path $1

if [ $MODE = "--debug" ]
then
    start_debug $SERVICE_PATH
elif [ $MODE = "--release" ]
then
    start $SERVICE_PATH
else
    echo "Error: $2 is not a valid mode"
fi