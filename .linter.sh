#!/bin/bash
cd /home/kavia/workspace/code-generation/weatherpulse-93009-93014/main_container_for_weatherpulse
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

