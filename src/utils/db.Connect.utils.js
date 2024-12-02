import { connect } from "mongoose";

async function dbConnect() {
    try {
        connect(process.env.MONGO_LINK);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;