#Othello (Reversi)

This is a classic puzzle game involving two players. In this implementation, we allow:

  * Two human players playing on the same browser;
  * One human player playing against an AI player;
  * Two AI players playing against each other.

## Installation

### Node.js

This software requires `node` and a set of helper commands to run. First, install the latest version of `node` by following the [Joynet's Github page](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager).

Then, type the following command to install `bower` and `gulp`:

```
npm install -g bower gulp
```

### Docker and its image

The AI players are implemented in C. We run those players inside a sandbox environment. We developed a sandbox docker named `tomlau10/sandbox-run`.

First, install Docker by the [following instruction in docker.io](https://docs.docker.com/installation/). Then, pull the docker image using the following command:

```
docker pull tomlau10/sandbox-run
```

### Code compilation

Install and compile the project's codes with the following commands:

```
npm install
bower install
gulp
```

## Execution

```
npm start
```

The above command runs `server.js` bound to the port 3000. In case you wish to bind the server to another port, e.g., `12345`, use the following command:

```
PORT=12345 npm start
```

## AI implementation

The implementations of the AI players were a project deliverable of the course [ESTR 1002 - Problem-Solving by Programming](http://estr1002.erg.cuhk.edu.hk), in Fall 2014, offered by [Faculty of Engineering](http://www.erg.cuhk.edu.hk), [The Chinese University of Hong Kong](http://www.cuhk.edu.hk).

All AI players were written as C function with the function prototype:

```c
void function_name(char board[8][8], char current_player, char opponent, int *input_row, int *input_column);
```

### Credits

The credits go to the following students:

  * CHAN, Siu Chun
  * CHAN, Yue Kan
  * CHAO, Yu
  * CHENG, Chun Hin
  * HU, Ke Hsin
  * HUNG, Hiu Hin
  * LAU, Chi Yung
  * LI, Sing Hei
  * WONG, Ka Wing
  * WONG, Pan Ben
  * YIU, Man Chi
  * ZHANG, Sibin
