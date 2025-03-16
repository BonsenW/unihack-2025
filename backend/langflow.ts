import { LangflowClient } from "@datastax/langflow-client";
import { Flow } from "@datastax/langflow-client/dist/flow";
import { UserInfo } from "./models/UserInfo"
import { Db, Collection } from "@datastax/astra-db-ts";
import fs from "fs";
import { connectDb } from "./db";


export let flow: Flow;

export const initializeLangflow = async () => {
    try {
        const dsLangflowClient = new LangflowClient({
            langflowId: process.env.LANGFLOW_ID, 
            apiKey: process.env.DATASTAX_TOKEN
        });

        flow = dsLangflowClient.flow(process.env.FLOW_ID);

        console.log("Connected to langflow api")

        // const response = await flow.run("6")
        // console.log(response.chatOutputText())
    } catch (error) {
        console.log(error)
    }

}



/**
 * Creates a collection in the specified database with vectorization enabled.
 * The collection will use NVIDIA's NV-Embed-QA embedding model
 * to generate vector embeddings for data in the collection.
 *
 * @param database - The instantiated object that represents the database where the collection will be created.
 * @param collectionName - The name of the collection to create.
 * @returns A promise that resolves to the created collection.
 */
// async function createCollection(
//   database: Db,
//   collectionName: string,
// ): Promise<Collection<UserInfo>> {
//   const collection = await database.createCollection<UserInfo>(collectionName, {
//     vector: {
//       service: {
//         provider: "nvidia",
//         modelName: "NV-Embed-QA",
//       },
//     },
//   });

//   console.log(
//     `Created collection ${collection.keyspace}.${collection.collectionName}`,
//   );

//   return collection;
// }

// /**
//  * Uploads data from a file containing a JSON array to the specified collection.
//  * For each piece of data, a $vectorize field is added. The $vectorize value is
//  * a string from which vector embeddings will be generated.
//  *
//  * @param collection - The instantiated object that represents the collection to upload the data to.
//  * @param dataFilePath - The path to a JSON file containing a JSON array.
//  * @param embeddingStringCreator - A function to create the string for which vector embeddings will be generated.
//  * @returns {Promise<void>} A promise that resolves when the data has been uploaded.
//  */
// async function uploadJsonData(
//   collection: Collection<UserInfo>,
//   dataFilePath: string,
//   embeddingStringCreator: (data: Record<string, any>) => string,
// ): Promise<void> {
//   // Read the JSON file and parse it into a JSON array.
//   const rawData = fs.readFileSync(dataFilePath, "utf8");
//   const jsonData = JSON.parse(rawData);

//   // Add a $vectorize field to each piece of data.
//   const documents: UserInfo[] = jsonData.map((data: any) => ({
//     ...data,
//     $vectorize: embeddingStringCreator(data),
//   }));

//   // Upload the data.
//   const inserted = await collection.insertMany(documents);
//   console.log(`Inserted ${inserted.insertedCount} items.`);
// }

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
