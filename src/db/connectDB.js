import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to MongoDB: ${connection.connection.host}`);
    } catch (error) {
        console.log("Error while Mongodb Connection");
        process.exit(1);
    }
}

export default connectDB;
