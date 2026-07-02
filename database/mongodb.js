import mongoose from "mongoose";
import {DB_URI, NODE_ENV} from "../config/env.js";

if (!DB_URI) {
    throw new Error("DB_URI not found. Please define the DB_URI variable in the .env.development.local file");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connection started in ${NODE_ENV} mode`);
    } catch (error) {
        console.error('Error connecting to database', error);
        process.exit(1);
    }
}

export default connectToDatabase;