#!/bin/bash

google-chrome \
  --disable-gpu \
  --disable-dev-shm-usage \
  --disable-setuid-sandbox \
  --no-sandbox \
  --remote-debugging-address=0.0.0.0 \
  --remote-debugging-port=21222 --headless &> ./headless-chrome.log &

echo $! > ./chrome.pid
sleep 3
echo $(grep -Po 'ws:.+' ./headless-chrome.log)
