const ChainUtil = require('../chain-util');
const { INITIAL_BALANCE } = require('../config');

class Wallet{
    constructor(){
        this.balance = INITIAL_BALANCE;//BALANCE
        this.keyPair = ChainUtil.genKeyPair();//THE PRIVATE KEY
        this.publicKey = this.keyPair.getPublic().encode('hex');//individuals in the network use to send currency to the wallet.

    }

    toString() {
        return `Wallet -
        publicKey : ${this.publicKey.toString()}
        balance   : ${this.balance}`
    }
    
    sign(dataHash) { //signing the data
        return this.keyPair.sign(dataHash);
    }
}

module.exports = Wallet;
