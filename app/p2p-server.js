const Websocket = require('ws');
const P2P_PORT = process.env.P2P_PORT || 5001; //Defining PORT Constant
const peers = process.env.PEERS ? process.env.PEERS.split(',') : []; //making an array of peers


class P2pServer {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.sockets = []; //It will contain the  peers connected to this web-socket server 
  }

  listen() {
    const server = new Websocket.Server({ port: P2P_PORT });//Starting Socket server
    server.on('connection', socket => this.connectSocket(socket));//listenting for connections
    
    this.connectToPeers();//

    console.log(`Listening for Peer-to-Peer connections on : ${P2P_PORT}`);
  }

  //This function will add the socket object into sockets array of the websocket-server.
  connectSocket(socket) {
    this.sockets.push(socket);
    console.log('Socket Connected');

    this.messageHandler(socket);//It will recieve message from socket object.
    //It will send the message to Socket Object
    this.sendChain(socket);
  }
  //This will create a new socket object for the given websocket address
  connectToPeers() {
    peers.forEach(peer => {
      const socket = new Websocket(peer);
      socket.on('open', () => this.connectSocket(socket));
    });
  }
  //recieving/handling the message
  messageHandler(socket) {
	socket.on('message', message => {
    const data = JSON.parse(message);
    this.blockchain.replaceChain(data);//replacing the chain as soon as recieving it.
    });
    }

    //Sending the chain to the socket object
    sendChain(socket) {
        socket.send(JSON.stringify(this.blockchain.chain));
    }
    //Sending the chain to each sockets
    syncChains() {
        this.sockets.forEach(socket => {
          this.sockets.forEach(socket => this.sendChain(socket));
        });
    }

  
}

module.exports = P2pServer;