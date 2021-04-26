const Blockchain = require("./blockchain")

const bc = new Blockchain();

for (let i=0; i<6; i++){
    console.log(bc.addBlock(`Block ${i}`).toString());
}// Generating Blockchain consisting of 6 blocks 