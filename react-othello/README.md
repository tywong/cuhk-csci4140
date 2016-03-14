#Othello (Reversi)

This is a classic puzzle game involving two players. In this implementation, we allow two human players playing on the same browser only.

## Installation

### Node.js

This software requires `node` and a set of helper commands to run. First, install the latest version of `node` by following the [Joynet's Github page](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager).

Then, type the following command to install `bower` and `gulp`:

```
npm install -g bower gulp
```

### Packages download

Download and install the project's codes with the following commands:

```
npm install
bower install
```

### Gulp

To create the bundled javascript file as well as to generate the css file:

```
gulp
```

## Execution

```
npm start
```

The above command runs `server.js` bound to the default port 3000. In case you wish to bind the server to another port, e.g., `12345`, use the following command:

```
PORT=12345 npm start
```

Last, you can use your browser to play the game using the URL:

```
http://127.0.0.1:3000
```

where `3000` is the default port 3000.
