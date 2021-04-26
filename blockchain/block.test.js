const Block = require('./block');
const { DIFFICULTY } = require('../config');


describe('Block', () => {
    let data, lastBlock, block;
    beforeEach(()=>{
        data = 'Testing Testing';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });
    it('Sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });//Unit Tests
    it('Sets the `lastHash` to match the hash of the last Block ', () => {
        expect(block.lastHash).toEqual(lastBlock.hash)
    });
    it('Generates a Hash that matches the difficulty', () => {
        expect(block.hash.substring(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
        console.log(block.toString());
    });
}); 
