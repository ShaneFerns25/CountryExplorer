import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import countriesRoute from './routes/countries.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/countries",countriesRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});