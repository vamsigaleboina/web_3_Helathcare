const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app3 = express();
const PORT = 500;

app3.use(cors());
app3.use(bodyParser.json());

// Simple array to store data, simulating a blockchain.
let dataStore = [];

app3.post('/addData', (req, res) => {
    const data = req.body;
    dataStore.push(data); // Simulate adding data to a blockchain.
    res.json({ message: 'Data added successfully', data });
});

app3.get('/blocks', (req, res) => {
    res.json(dataStore);
});

app3.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
