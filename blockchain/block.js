const SHA256 = require('crypto-js/sha256');
class Block{
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash =lastHash;
        this.hash = hash;
        this.data =data;
    }
    // It helps us to see Block Details
    toString () {
        return `Block - 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash}
            Hash     :${this.hash}
            Data     :${this.data}`;
    }
    // The first Block with predefined Values
    static genesis() {
        return new this('Genesis Time', '----------', 'fX4d4h5s3', 'Genesis');
    }
    //Generating a Block
    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data);

    }
    //This helps us to generate a Hash
    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
    // It will help us to regenerate a block and thus we can verify that is its hash, correct or not! :)
    static blockHash(block){
        const {timestamp, lastHash, data} = block;
        return Block.hash(timestamp, lastHash, data);
    }
}
// ====================================Testing ===============================
// const bl = new Block('1234567890', '1234567890','1234567890', '1234567890');
// console.log(bl.toString());

module.exports = Block;