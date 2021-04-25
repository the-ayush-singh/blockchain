const Block = require('./block');

class Blockchain {
    constructor (){
        this.chain = [Block.genesis()];
    }
    addBlock(data){
        const block = Block.mineBlock(this.chain[this.chain.length-1],data);
        this.chain.push(block);
        
        return block;
    }
    isValidChain(chain) {
        // Checking that 1st block equals to Genesis Block or not !!!
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
         //Now Verifying Individual Blocks
        for (let i=1; i<chain.length; i++) 
        {
          const block = chain[i];
          const lastBlock = chain[i-1];
          /*Here verifying lasthashe with their last block hash 
            Also Checking that the hash of the cureent block is valid or not,
            By generating a new HASH with same data*/
          if (
            block.lastHash !== lastBlock.hash ||
            block.hash !== Block.blockHash(block)
          ) {
            return false;
          }
        }
        return true;
      }
      // WARNING : CALL CORRECT PROPERTIES OF THE OBJECTS :) ELSE YOU'LL CRY :(

}

module.exports = Blockchain;