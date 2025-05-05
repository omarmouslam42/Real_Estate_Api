import mongoose from "mongoose"

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database Connected Successfully 🚀 ');
    } catch (error) {
        console.error(error.message,"Fail to connect DB.")
    }
}

export default connectDb