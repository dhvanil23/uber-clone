const express = require('express');
const app = express();
const userRouter = require('./routes/userAuth.route')
const driverRouter = require('./routes/driverAuth.route')
const PORT = process.env.PORT || 3000;
const {connectDB} = require('./connectDb')

require('dotenv').config();

connectDB(process.env.dbUrl);

app.use(express.json());
app.use('/user', userRouter);
app.use('/driver', driverRouter);

app.listen(PORT, ()=>{
    console.log('Server is running');
})
