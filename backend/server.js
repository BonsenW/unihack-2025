const express = require('express');
const path = require('path');
const app = express();

// Serve static files from React
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Default route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
