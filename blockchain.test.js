const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('starts with the genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {
        const data = 'foo';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    });

    it('Validates a valid chain', () => {
        bc2.addBlock('foo');
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    it('Invalidates a corrupt Genesis Block', ()=>{
        bc2.chain[0].data = 'Bad Data';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('Invalidates a corrupt chain', ()=>{
        bc2.addBlock('foo');
        bc2.chain[1].data = 'Manipulating Blockchain';
        expect(bc.isValidChain(bc2.chain)).toBe(false);

    });
});