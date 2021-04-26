const SHA256 = require('crypto-js/sha256');
const { DIFFICULTY } = require('../config');


class Block{
    constructor(timestamp, lastHash, hash, data, nonce){
        this.timestamp = timestamp;
        this.lastHash =lastHash;
        this.hash = hash;
        this.data =data;
        this.nonce = nonce;
    }
    // It helps us to see Block Details
    toString () {
        return `Block - 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash}
            Hash     : ${this.hash}
            Nonce    : ${this.nonce} 
            Data     : ${this.data}`;
    }
    // The first Block with predefined Values
    static genesis() {
        return new this('Genesis Time', '----------', 'fX4d4h5s3', 'Genesis', 0);
    }
    //Generating a Block
    static mineBlock(lastBlock, data){
        let hash, timestamp;
        let nonce = 0; //Nance Value #Proof of Work
        const lastHash = lastBlock.hash;
        
        do{
            nonce++; 
            timestamp = Date.now();
            hash = Block.hash(timestamp, lastHash, data,nonce);
        } while (hash.substring(0,DIFFICULTY) !== '0'.repeat(DIFFICULTY));// Verifing 0s in Hash begining #proof of work


        return new this(timestamp, lastHash, hash, data, nonce);

    }
    //This helps us to generate a Hash
    static hash(timestamp, lastHash, data, nonce) {
        return SHA256(`${timestamp}${lastHash}${data}${nonce}`).toString();
    }
    // It will help us to regenerate a block and thus we can verify that is its hash, correct or not! :)
    static blockHash(block){
        const {timestamp, lastHash, data, nonce} = block;
        return Block.hash(timestamp, lastHash, data, nonce);
    }
}
// ====================================Testing ===============================
// const bl = new Block('1234567890', '1234567890','1234567890', '1234567890');
// console.log(bl.toString());

module.exports = Block;