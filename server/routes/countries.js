import express from 'express';
import axios from "axios";

const router = express.Router();

router.get('/:country', async (req,res)=>{
    try {
        const country = req.params.country;
        // Retreiving important info related to the country.
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);

        const {name: {common,official}, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borders, area, population, timezones, continents, flags: {png,alt}, capitalInfo} = response.data[0];

        // console.log(common,official, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borders, area, population, timezones, continents, png, alt, capitalInfo);

        let otherNames=altSpellings.join(" or ");
        let capitalLatLng=capitalInfo.latlng.join(",");
        let latLng=latlng.join(",");
        let countrysContinents="";
        continents.length>1?countrysContinents+=`continents of ${continents.toString()}`:countrysContinents+=`continent of ${continents[0]}`;
        
        let borderCountries="";

        if (borders){
            const borderCountriesCodes = borders.toString();
            
            // Retreiving names of countries surrounding the country in question, from their country codes.
            const response2 = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${borderCountriesCodes}`);

            for (const borderCountry of response2.data){
                const {name: {common: country}} = borderCountry;

                if (Object.keys(response2.data).length-1==borderCountry){
                    borderCountries+="and"+country;
                }
                else{
                    borderCountries+=country+",";
                }
            };
        }

        const info = {common, official, independent, currencies, capital, otherNames, region, subregion, languages, latLng, landlocked, borderCountries, area, population, timezones, countrysContinents, png, alt, capitalLatLng};

        // console.log(info);
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;