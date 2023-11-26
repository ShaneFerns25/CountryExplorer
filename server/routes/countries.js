import express from 'express';
import axios from "axios";

const router = express.Router();

const country = 'India';

router.get('/', async (req,res)=>{
    try {
        // Retreiving important info related to the country.
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);

        const {name: {common,official}, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borders, area, population, timezones, continents, flags: {png,alt}, capitalInfo} = response.data[0];

        // console.log(common,official, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borders, area, population, timezones, continents, png, alt, capitalInfo);

        let borderCountriesList=[];

        if (borders){
            const borderCountriesCodes = borders.toString();
            
            // Retreiving names of countries surrounding the country in question, from their country codes.
            const response2 = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${borderCountriesCodes}`);

            for (const borderCountry of response2.data){
                const {name: {common: country}} = borderCountry;

                borderCountriesList.push(country)
            };
        }

        const info = {common, official, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borderCountriesList, area, population, timezones, continents, png, alt, capitalInfo};

        console.log(info);
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;