const express = require('express');
const bodyParser = require('body-parser');
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, precedingHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();
    }

    computeHash() {
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2020", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.precedingHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.chain.push(newBlock);
    }
}

// Initialize the blockchain
const SmartHealthBlockchain = new Blockchain();

// Setup express app
const app = express();
app.use(bodyParser.json());

// Endpoint to get the entire blockchain
app.get('/blocks', (req, res) => {
    res.json(SmartHealthBlockchain.chain);
});

// Endpoint to add a new patient data block
app.post('/addData', (req, res) => {
    const newData = req.body.data;
    const newBlock = new Block(SmartHealthBlockchain.getLatestBlock().index + 1, new Date().toISOString(), newData);
    SmartHealthBlockchain.addBlock(newBlock);
    res.send({ message: "Block added successfully", block: newBlock });
});

// Handle errors and start server
const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)).on('error', (err) => {
    console.error('Server error:', err);
});

const cors = require('cors');
const app2 = express();

app2.use(cors()); // This will enable CORS for all routes

// Your existing code
