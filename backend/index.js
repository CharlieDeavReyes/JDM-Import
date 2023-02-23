const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true}
 );
 const connection = mongoose.connection;
 connection.once('open',() => {
    console.log ("MongoDB database connection established successfully");

 })

 const carRouter = require ('./routes/car');
 const usersRouter = require ('./routes/users');

 app.use('/car', carRouter);
 app.use ('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
// import app from "./server.js"
// import mongodb from "mongodb"
// import dotenv from "dotenv"
// dotenv.config()

// const MongoClient = mongodb.MongoClient

// const port = process.env.PORT || 8000

// MongoClient.connect(
//   process.env.MONGO_DB_URI,
//   {
//     MaxPoolSize: 50,
//     wtimeoutMS: 2500,
//   }
//     // useNewUrlParse: true }
//   )
//   .catch(err => {
//     console.error(err.stack)
//     process.exit(1)
//   })
//   .then(async client => {
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`)
//     })
//   })
