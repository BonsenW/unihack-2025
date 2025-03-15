// db.js
require('dotenv').config();
const { DataAPIClient } = require('@datastax/astra-db-ts');

// Initialize the client
const client = new DataAPIClient(process.env.ASTRA_DB_TOKEN);
const db = client.db(process.env.ASTRA_DB_CONN_STRING);

// Function to test the connection
const connectDb = async () => {
  try {
    const colls = await db.listCollections();
    console.log('Connected to AstraDB:', colls);
    return db;
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export{ db, connectDb };