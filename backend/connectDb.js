const mongoose = require('mongoose');

module.exports.connectDB = (dbUrl) => {
    mongoose.connect(dbUrl)
    .then(()=>{
        console.log('MongoDB is connected')
    })
    .catch((err)=>{
        console.log('MongoDB connection failed:',err);
    })
}