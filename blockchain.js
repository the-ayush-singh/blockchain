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
    
    // Making Blockchain Ready for accepting other chains from different sources.
    replaceChain(newChain){
        //Newer Chain should be longer than the current one.
        if (newChain.length <= this.chain.length){
            console.log('This is shorter than current Chain');
            return;
        }
        //It should be a valid chain.
        else if(!this.isValidChain(newChain)){
            console.log('This is an invalid chain');
            return;
        }
        //If above Both conditions are satisfied then we can replace the current chain with a new one.
        console.log('Replacing the block chain with new chain');
        this.chain = newChain;
    }
}

module.exports = Blockchain;