import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import path from 'path';
const app = express();
import { connectDb } from "./db.js";


import { initializeLangflow } from './langflow.js';
import { InitializeMongoDb } from './mongo.js';

// const dummyData = require('./data/dummyData.json')

// JSON middleware 
app.use(express.json());

// API Routes config
import userRoute from './routes/users.js';
app.use('/api/users', userRoute);

// Serve static files from React
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Default route
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });



const PORT = process.env.PORT || 5000;


// Start server
const startServer = async () => {
    const db = await connectDb();

    await initializeLangflow();
    await InitializeMongoDb();

    // const userCollection = db.collection('user_preferences');
    // userCollection.insertMany(dummyData)

    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
};

startServer();

