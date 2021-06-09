const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');
const { v1: uuidv1 } = require('uuid');//helps us to generate unique IDs for transactions.
const ec = new EC('secp256k1');
/*sec stands for standards of efficient cryptography.
 The p stands for prime, and 256 for 256 bits. 
 In the elliptic-based algorithm itself, a key component is a prime number to generate the curve, 
 and this prime number will be 256 bits, 
 or 32 bytes/characters. 
 K stands for Koblitz which is the name of a notable mathematician in the field of cryptography. 
 And 1 stands for this being the first implementation of the curve algorithm in this standard.
*/

class ChainUtil {
    static genKeyPair() {
      return ec.genKeyPair();
    }

    static id(){
      return uuidv1();
    }
    static hash(data) {
      return SHA256(JSON.stringify(data)).toString();
    }
    
}

module.exports = ChainUtil;