const ChainUtil = require('../chain-util');
const { DIFFICULTY, MINE_RATE } = require('../config');


class Block{
    constructor(timestamp, lastHash, hash, data, nonce, difficulty){
        this.timestamp = timestamp;
        this.lastHash =lastHash;
        this.hash = hash;
        this.data =data;
        this.nonce = nonce;
        this.difficulty = difficulty || DIFFICULTY;
    }
    // It helps us to see Block Details
    toString () {
        return `Block - 
            Timestamp  : ${this.timestamp}
            Last Hash  : ${this.lastHash}
            Hash       : ${this.hash}
            Nonce      : ${this.nonce}
            Difficulty : ${this.difficulty}
            Data       : ${this.data}`;
    } 
    // The first Block with predefined Values
    static genesis() {
        return new this('Genesis Time', '----------', 'fX4d4h5s3', 'Genesis', 0, DIFFICULTY);
    }
    //Generating a Block
    static mineBlock(lastBlock, data){
        let hash, timestamp;
        let nonce = 0; //Nance Value #Proof of Work
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        
        do{
            nonce++; 
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty(lastBlock, timestamp );//Manipulating DIFFICULTY
            hash = Block.hash(timestamp, lastHash, data, nonce, difficulty);
        } while (hash.substring(0,difficulty) !== '0'.repeat(difficulty));// Verifing 0s in Hash begining #proof of work


        return new this(timestamp, lastHash, hash, data, nonce, difficulty);

    }
    //This helps us to generate a Hash
    static hash(timestamp, lastHash, data, nonce, difficulty) {
        return ChainUtil.hash(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
    }
    // It will help us to regenerate a block and thus we can verify that is its hash, correct or not! :)
    static blockHash(block){
        const {timestamp, lastHash, data, nonce, difficulty} = block;
        return Block.hash(timestamp, lastHash, data, nonce, difficulty);
    }
    static adjustDifficulty(lastBlock, currentTime){
        let{ difficulty } = lastBlock; //ES6 way of defining a property
        difficulty = lastBlock.timestamp + MINE_RATE > currentTime ? difficulty + 1 : difficulty - 1;
        //If difference exceeds MINE_RATE then reducing DIFFICULTY AND VICE-VERSA
        return difficulty;

    }
}
// ====================================Testing ===============================
// const bl = new Block('1234567890', '1234567890','1234567890', '1234567890');
// console.log(bl.toString());

module.exports = Block;