import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URI = process.env.MONGO_URI;

export const MONGO_DB = process.env.MONGO_DB;