const Transaction = require('./transaction');
const Wallet = require('./index');

describe('Transaction',()=>{
    let transactions, wallet, recepientAdd, amount;

    beforeEach(()=>{
        wallet = new Wallet();//creating a new wallet
        amount = 100;
        recepientAdd = 'fakeAdress';
        transactions = Transaction.newTransaction(wallet, recepientAdd, amount);//creating a new transaction
    });

    it ('Outputs the `amount` subtracted from wallet balance',()=>{
        expect(transactions.output.find(output => output.address === wallet.publicKey).amount)
        .toEqual(wallet.balance - amount);
        console.log('Amount Debited');
    });

    it ('Outputs the `amount` added to the recepient',()=>{
        expect(transactions.output.find(output => output.address === recepientAdd).amount)
        .toEqual(amount);
        console.log('Amount Recieved');
    });

    it ('inputs the balance of the wallet',()=>{
        expect(transactions.input.amount).toEqual(wallet.balance);
        //if passes means input obj. has been created.
    });

    it ('validates a input transaction', ()=>{
        expect(Transaction.verifyTransaction(transactions)).toBe(true);
        console.log('This is a valid Transaction');
    });
    it ('invalidates a corrupt input transaction', ()=>{
        transactions.output[0] = 3;
        expect(Transaction.verifyTransaction(transactions)).toBe(false);
        console.log('This is an invalid Transaction');
    });

    describe('transacting with an amount that exceeds the balance', () => {
        beforeEach(() => {
          amount = 50000;
          transaction = Transaction.newTransaction(wallet, recepientAdd, amount);
        });
    
        it('does not create the transaction', () => {
          expect(transaction).toEqual(undefined);
        });
    });



});