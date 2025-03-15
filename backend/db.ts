import { DataAPIClient, Db, VectorizeDoc } from "@datastax/astra-db-ts";
// db.js
import dotenv from 'dotenv'
dotenv.config()
// const { DataAPIClient } = require('@datastax/astra-db-ts');

// // Initialize the client
// const client = new DataAPIClient(process.env.ASTRA_DB_TOKEN);
// const db = client.db(process.env.ASTRA_DB_CONN_STRING);

// // Function to test the connection
// const connectDb = async () => {
//   try {
//     const colls = await db.listCollections();
//     console.log('Connected to AstraDB:', colls);
//     return db;
//   } catch (error) {
//     console.error('Database connection error:', error);
//     process.exit(1);
//   }
// };

// export{ db, connectDb };

/**
 * Connects to a DataStax Astra database.
 * This function retrieves the database endpoint and application token from the
 * environment variables `ASTRA_DB_API_ENDPOINT` and `ASTRA_DB_APPLICATION_TOKEN`.
 *
 * @returns An instance of the connected database.
 * @throws Will throw an error if the environment variables
 * `ASTRA_DB_API_ENDPOINT` or `ASTRA_DB_APPLICATION_TOKEN` are not defined.
 */

export function connectDb(): Db {
  const { ASTRA_DB_CONN_STRING: endpoint, ASTRA_DB_TOKEN: token } =
    process.env;

  if (!token || !endpoint) {
    throw new Error(
      "Environment variables ASTRA_DB_API_ENDPOINT and ASTRA_DB_APPLICATION_TOKEN must be defined.",
    );
  }

  // Create an instance of the `DataAPIClient` class with your token.
  const client = new DataAPIClient(token);

  // Get the database specified by your endpoint.
  const database = client.db(endpoint);

  console.log(`Connected to database ${database.id}`);

  return database;
}
