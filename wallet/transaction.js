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

        return transaction;

    }
}

module.exports = Transaction;