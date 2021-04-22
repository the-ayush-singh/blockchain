const Block = require('./block');

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
}); 
