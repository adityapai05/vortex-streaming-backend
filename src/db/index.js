import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";
import { app } from "../app.js";
const connectDB = async () => {
    try{
        const connectionInstance  = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB Connected! \n Database Host: ${connectionInstance.connection.host}`)
    }   
    catch(error) {
        console.error('MongoDB Connection Failed: ', error);
        process.exit(1);
    }
}

export default connectDB;