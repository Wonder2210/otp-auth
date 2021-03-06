require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';


import authRoutes from './routes/auth';

const app = express();

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex: true
}).then(db=>{
            console.log("Db Connected successfully");
          })
    .catch(err=>{
            console.log("Error");
          });


app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'));
app.use('/api/auth',authRoutes);

app.listen(4000,()=>{
  console.log("running on http://localhost:4000");
});
