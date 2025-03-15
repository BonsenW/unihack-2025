require('dotenv').config()
import express from 'express';
import path from 'path';
import { connectDb } from './db'
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

import dummyData from './data/noIdDummyData.json';

const app = express();

// JSON middleware 
app.use(express.json());

// API Routes config
import userRoute from './routes/users'
app.use('/api/users', userRoute);

// Serve static files from React
app.use(express.static(path.join(__dirname, '../frontend/build')));

const PORT = process.env.PORT || 5000;

// let mdb;

// Start server
const startServer = async () => {
    try {
    const db = await connectDb();

    // const userCollection = db.collection('user_preferences');


    // userCollection.insertMany(dummyData)

    const mongoConnection = await mongoose.connect(process.env.MONGO_DB_CONN_STRING)
    // mdb = mongoConnection.connection.db

    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
    } catch (error) {
        console.log(error)
    }
};

startServer();

// export { mdb }
