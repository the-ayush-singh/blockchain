const ChainUtil = require('../chain-util');

class Transaction {
    constructor() {
        this.id = ChainUtil.id();
        this.input = null;
        this.output = [];// it will contains two outputs.
    }
    update(senderWallet, recipient, amount) {
        /* To handle the addition of new output objects to an existing transaction,
        define a function in the Transaction class. */
        const senderOutput = this.output.find(output => output.address === senderWallet.publicKey);

        if (amount > senderOutput.amount) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }

        senderOutput.amount = senderOutput.amount - amount;
        this.output.push({ amount, address: recipient });
        Transaction.signTransaction(this, senderWallet);

        return this;
    }

    static newTransaction(sendersWallet, recepientAdd, amount) {
        const transaction = new this();//creating new object of the same class

        if (amount > sendersWallet.balance) {
            console.log(`Your ${amount} exceeds than your wallet balance`);
            return;
        }

        transaction.output.push(...[
            { amount: sendersWallet.balance - amount, address: sendersWallet.publicKey },
            { amount, address: recepientAdd }

        ]);

        Transaction.signTransaction(transaction, sendersWallet);

        return transaction;

    }

    static signTransaction(transaction, senderWallet) { //signing the input
        transaction.input = {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(ChainUtil.hash(transaction.output))//signing the hash of outputs
        }
    }

    static verifyTransaction(transaction) {
        return ChainUtil.verifySign(
            transaction.input.address,
            transaction.input.signature,
            ChainUtil.hash(transaction.output)
        );
    }
}

module.exports = Transaction;