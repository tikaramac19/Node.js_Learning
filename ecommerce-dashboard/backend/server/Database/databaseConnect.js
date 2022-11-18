const mongoose = require('mongoose');

const connectDB = async (req,res) =>{

    try{

        const con = await mongoose.connect(process.env.MONGO_URI,{
            // not allows to print unwanted console warnings
            // useNewUrlParser : true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        });

        console.log(`MongoDB connected: ${con.connection.host}`);

    }catch(err){
        console.log(err);
        process.exit
    }
}

module.exports = connectDB;