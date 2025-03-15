require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
import { connectDb } from './db'

const dummyData = require('./data/noIdDummyData.json')

// JSON middleware 
app.use(express.json());

// API Routes config
const userRoute = require('./routes/users');
app.use('/api/users', userRoute);

// Serve static files from React
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Default route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});



const PORT = process.env.PORT || 5000;

// Start server
const startServer = async () => {
    const db = await connectDb();

    // const userCollection = db.collection('user_preferences');


    // userCollection.insertMany(dummyData)


    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
};

startServer();
