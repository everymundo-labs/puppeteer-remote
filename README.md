# puppeteer-remote
Example on how to run a browser that is ready to be connected by a puppeteer client remotely

## First you start the browser
```sh
./start-chrome.sh
```
or
```sh
bash ./start-chrome.sh
```

It will print to the screen the address of the remote browser, something like this
```
ws://0.0.0.0:21222/devtools/browser/b5c74c1e-1cb7-4dad-bf8d-dd43ba782fea
```

## Then you run the app
You will have to pass that URL to the app as the first inline argument, like this:
```sh
node ./app.mjs ws://0.0.0.0:21222/devtools/browser/b5c74c1e-1cb7-4dad-bf8d-dd43ba782fea
```

Alternatively you can set the environmental variable `CHROME_WS_ENDPOINT`
```sh
export CHROME_WS_ENDPOINT='ws://0.0.0.0:21222/devtools/browser/b5c74c1e-1cb7-4dad-bf8d-dd43ba782fe'
node ./app.mjs
```

If successfull the app will save a png file on the current working directory

## Finally you can stop the server
By running the stop script
```sh
./stop-chrome.sh
```
or
```sh
bash ./stop-chrome.sh
```

## Quick Run
```
export CHROME_WS_ENDPOINT=$(./start-chrome.sh) && node ./app.mjs && ./stop-chrome.sh
```