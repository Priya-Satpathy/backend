
const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB connection successfully at ${mongoose.connection.host}`)

    } catch (error) {
        console.log(`DB connection error at ${error}`);
        
    }
}
module.exports = connectDB