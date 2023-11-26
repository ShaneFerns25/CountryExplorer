import express from 'express';
import axios from "axios";

const router = express.Router();

const country = 'Ireland';

router.get('/', async (req,res)=>{
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);

        const {name: {common,official}, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borders, area, population, timezones, continents, flags: {png,alt}, capitalInfo} = response.data[0];

        // console.log(common,official, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borders, area, population, timezones, continents, png, alt, capitalInfo);

        const info = {common, official, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borders, area, population, timezones, continents, png, alt, capitalInfo};

        console.log(info);
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;