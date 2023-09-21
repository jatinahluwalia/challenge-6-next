import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  try {
    if (isConnected) return console.log("Mongo already connected.");
    mongoose.connect(process.env.MONGO_URI || "");
    isConnected = true;
    console.log("Mongo Connected");
  } catch (error: any) {
    throw new Error(`Error connecting to Mongo DB: ${error.message}`);
  }
};
