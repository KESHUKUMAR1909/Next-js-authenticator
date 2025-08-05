import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.mongo_url!); // Remove ! unless using TypeScript and validated

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB Connected Successfully");
        });

        connection.on('error', (err) => {
            console.error("MongoDB connection error. Please make sure MongoDB is running. \n" + err);
        });

    } catch (error) {
        console.error("Initial MongoDB connection failed:");
        console.error(error);
    }
}
