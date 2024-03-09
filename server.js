const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Support JSON-encoded bodies

// In-memory "database" for demonstration purposes
let users = {};

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Check if the username already exists
    if (users.hasOwnProperty(username)) {
        return res.status(409).json({ message: 'Username is already in use' });
    }

    // Store the user (Note: In production, you should hash the password)
    users[username] = { password };

    console.log(users); // For demonstration purposes, to see the "database" grow

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
