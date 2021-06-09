const ChainUtil = require('../chain-util');

class Transaction{
    constructor (){
        this.id = ChainUtil.id();
        this.input = null;
        this.output = [];// it will contains two outputs.
    }

    static newTransaction(sendersWallet, recepientAdd, amount){
        const transaction = new this();//creating new object of the same class

        if (amount>sendersWallet.balance) {
            console.log(`Your ${amount} exceeds than your wallet balance`);
            return;
        }

        transaction.output.push(...[
            { amount: sendersWallet.balance - amount, address : sendersWallet.publicKey},
            { amount, address : recepientAdd}
        
        ]);

        Transaction.signTransaction(transaction, sendersWallet);

        return transaction;

    }

    static signTransaction(transaction, senderWallet){ //signing the input
        transaction.input = {
            timestamp : Date.now(),
            amount : senderWallet.balance,
            address : senderWallet.publicKey,
            signature : senderWallet.sign(ChainUtil.hash(transaction.output))//signing the hash of outputs
        }
    }
}

module.exports = Transaction;