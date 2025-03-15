import mongoose from "mongoose";

export let mdb: mongoose.mongo.Db;

export const InitializeMongoDb = async () => {
    try {
        const mongoConnection = await mongoose.connect(process.env.MONGO_DB_CONN_STRING);
        mdb = mongoConnection.connection.db
        console.log("Connected to MongoDb database")
    } catch (error) {
        console.log(error)
    }
}