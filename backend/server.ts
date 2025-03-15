require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
import { connectDb } from './db'
import { VectorizeDoc, Db, Collection } from "@datastax/astra-db-ts";
import fs from "fs";

// const dummyData = require('./data/dummyData.json')

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


// Defining interface for user information to later parse
// The VectorizeDoc interface adds a $vectorize key.
export interface UserInfo extends VectorizeDoc {
    "userId": string;
    "gender": string;
    "age": string;
    "interests": string;
    "pets": string;
    "budgetRange": string;
    "garageSpace": string;
};

/**
 * Creates a collection in the specified database with vectorization enabled.
 * The collection will use NVIDIA's NV-Embed-QA embedding model
 * to generate vector embeddings for data in the collection.
 *
 * @param database - The instantiated object that represents the database where the collection will be created.
 * @param collectionName - The name of the collection to create.
 * @returns A promise that resolves to the created collection.
 */
async function createCollection(
  database: Db,
  collectionName: string,
): Promise<Collection<UserInfo>> {
  const collection = await database.createCollection<UserInfo>(collectionName, {
    vector: {
      service: {
        provider: "nvidia",
        modelName: "NV-Embed-QA",
      },
    },
  });

  console.log(
    `Created collection ${collection.keyspace}.${collection.collectionName}`,
  );

  return collection;
}

/**
 * Uploads data from a file containing a JSON array to the specified collection.
 * For each piece of data, a $vectorize field is added. The $vectorize value is
 * a string from which vector embeddings will be generated.
 *
 * @param collection - The instantiated object that represents the collection to upload the data to.
 * @param dataFilePath - The path to a JSON file containing a JSON array.
 * @param embeddingStringCreator - A function to create the string for which vector embeddings will be generated.
 * @returns {Promise<void>} A promise that resolves when the data has been uploaded.
 */
async function uploadJsonData(
  collection: Collection<UserInfo>,
  dataFilePath: string,
  embeddingStringCreator: (data: Record<string, any>) => string,
): Promise<void> {
  // Read the JSON file and parse it into a JSON array.
  const rawData = fs.readFileSync(dataFilePath, "utf8");
  const jsonData = JSON.parse(rawData);

  // Add a $vectorize field to each piece of data.
  const documents: UserInfo[] = jsonData.map((data: any) => ({
    ...data,
    $vectorize: embeddingStringCreator(data),
  }));

  // Upload the data.
  const inserted = await collection.insertMany(documents);
  console.log(`Inserted ${inserted.insertedCount} items.`);
}

// (async function () {
//   const database = connectDb();

//   const collection = await createCollection(
//     database,
//     "user_preferences",
//   );

//   await uploadJsonData(
//     collection,
//     './data/dummyData.json',
//     (data) => {
//       // Concatenate all the fields into one string to be vectorized
//       return `${data.userId} | ${data.gender} | ${data.age.join(", ")} | ${data.interests.join(", ")} | ${data.pets} | ${data.budgetRange} | ${data.garageSpace}`;
//     },
//   );
// })();


const PORT = process.env.PORT || 5000;

// Start server
const startServer = async () => {
    const db = await connectDb();

    // const userCollection = db.collection('user_preferences');


    // userCollection.insertMany(dummyData)


    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
};

let inputValue = ""; // Insert input value here

fetch(
  "https://api.langflow.astra.datastax.com/lf/264dd2c4-6626-4af0-9f43-ef569e57dc2c/api/v1/run/f83f4261-bab2-47c7-9330-22f0b2b6444e?stream=false",
  {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.DATASTAX_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
			input_value: inputValue, 
      output_type: "chat",
      input_type: "chat",
      tweaks: {
        "ChatInput-DTz08": {},
        "Prompt-zjQZw": {},
        "ChatOutput-QRH2J": {},
        "ParseData-wovQq": {},
        "GoogleGenerativeAIModel-AfoqL": {},
        "AstraDB-lTea5": {}
}
    }),
  },
)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


startServer();

