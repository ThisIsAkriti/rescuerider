import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
    throw new Error("Mongo URI not found!");
}

async function dbConnect() {
    if (mongoose.connection.readyState >= 1) {
        console.log("Already Connected to mongoDB");
        return;
    }

    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("MongoDb connection failed. " + err);
    }
}
export default dbConnect;
