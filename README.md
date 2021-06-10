# Blockchain



<img src="https://base.imgix.net/files/base/ebm/mhlnews/image/2019/04/mhlnews_10632_blockchain_2.png?auto=format&dpr=2&fit=crop&h=432&w=768" alt="Blockchain">

## Testing Blockchain to Create a Cryptocurrency like Bitcoin, DogeCoin, etc. 
<img src="https://image.cnbcfm.com/api/v1/image/106820278-1609972654383-hand-holding-a-bitcoin-in-front-of-a-computer-screen-with-a-dark-graph-blockchain-mining-bitcoin_t20_pRrrjP.jpg?v=1610580302&w=740&h=416" alt="Bitcoin" width="50%" height="300vh" ><img src="https://cdn.vox-cdn.com/thumbor/LRr0Py3_2vOgvaCUuRNvtUeV2bk=/0x0:560x345/1820x1213/filters:focal(236x129:324x217):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69137452/Dogecoin_logo.0.png" alt="DogeCoin" height="300vh" width="50%">

### It utilizes Basic JS concepts(OOPs, Arrow Functions, Modules,etc..) arranged in a logical way.
Node Js Programming Lanuage is used here.

## Here we're generating Blocks with their unique Hashes using (SHA 256)

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/Screenshot%20.png" alt="Testing the Hash Function">

## Testing all the commits(like Blockchain Validation, Mining function, etc)! Just to be On safe Sides 😀
Here NodeMon is used to Leverage auto run facility

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/tests.png" alt="Testing Validation Function">

## Creating and Testing APIs using POSTMAN

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/postman.png?raw=true" alt="Postman">

## Linked various peers through websocket and SYNC the Blockchain

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/sync-test.png?raw=true" alt="Peers connection display in Terminal">

## Creating BLOCKS using postman and Syncing it through WebSocket

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/postman2.png?raw=true" alt="Postman generating POST Requests(Blocks)">

# PROOF OF WORK

## Adding difficulty to the Blockchain so that it cannot be exploited. 
### We can see that at DIFFICULTY = 4 there are four zeros in the beginning of the Hash
With  DIFFICULTY = 4 the time taken to generate the block is about 4 sec.

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/DIFFICULTY4.png?raw=true" alt="DIFFICULTY AT 4">

## With DIFFICULTY = 5 there are five (0)s in the begining of the Hash and Time taken to generate the Block is about 47s.

Therefore we can observe that time increases exponentially as difficulty increases, therefore DIFFICULTY helps the Blockchain to prevent its exploitation! As more and more resource of the MINER will be utilised for mining the chain. Therefore if someone wants to replace the whole chain they will need about 51% power of the total Blockchain system and even after doing so it won't be worth it.


<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/DIFFICULTY5.png?raw=true" alt="DIFFICULTY AT 5">

## Generating a Blockchain with Dynamic DIFFICULTY
Here difficulty is varying according to the time taken by previous Block production.

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/BLOCKCHAIN6.png?raw=true" alt="Blocks with Dynamic DIFFICULTY">

# Creating Crypto Wallets
Wallets are used to store blocks/cryptocurrencies. It helps users to protect, authenticate as well as transact their Cryptos/Blocks.
<img src="https://blog.bitnovo.com/wp-content/uploads/2019/04/que-es-wallet-bitcoins-criptomonedas.jpg" alt="Wallet">

## Transactions
Transaction contain a unique ID, address of the sender's and the recipient's wallet, amount to be transferred.

Transaction object is divided into two parts - Input and Output.

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/Transaction_test.png?raw=true" alt="Transaction Tests">

## Verifying Transactions
We can verify the incoming transaction using SHA256 and keyFromPublic() function in JavaScript imported from <b>ec</b> module.

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/verification.png?raw=true" alt="Transaction Verification test">

## Updating Transactions
To make transaction object more efficient and optimised we can update it, if transaction is being made to the same user multiple times.

<img src="https://github.com/the-ayush-singh/blockchain/blob/main/images/updation.png?raw=true" alt="Updation Verification test">

