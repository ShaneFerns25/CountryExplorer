import express from 'express';
import 'dotenv/config';
import countriesRoute from './routes/countries.js';

const app = express();

app.use(express.json());

app.use("/api/countries",countriesRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});