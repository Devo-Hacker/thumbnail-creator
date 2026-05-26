import mongoose from 'mongoose'

const connectDB = async() =>{
    try {
        mongoose.connection.on('connected', ()=>console.log("your databse has been synced"))
        await mongoose.connect(process.env.MONGODB_URI as string)
    } catch (error) {
        console.error(error, 'error connecting to the DB')
    }
}

export default connectDB