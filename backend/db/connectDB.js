import mongoose from 'mongoose';
import { MONGO_URI, MONGO_DB } from '../config.js';



const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI + MONGO_DB, {
            writeConcern: {
                w: 'majority', 
            }
        })
        console.log("Successfully connected to the database")
    }
    catch (error) {
        console.log(error.message)
    }

}

export default connectToDatabase;
