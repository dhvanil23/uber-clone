const express = require('express');
const app = express();
const userRouter = require('./routes/userAuth.route')
const driverRouter = require('./routes/driverAuth.route')
const PORT = process.env.PORT || 3000;
const {connectDB} = require('./connectDb')
const cors = require('cors');

require('dotenv').config();

connectDB(process.env.dbUrl);

app.use(express.json());
app.use(cors());

// Allow specific origin
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  credentials: true, // Allow cookies if needed
}));

app.use('/user', userRouter);
app.use('/driver', driverRouter);

app.listen(PORT, ()=>{
    console.log('Server is running');
})
