import express from 'express';
import axios from "axios";

const router = express.Router();

router.get('/:country', async (req,res)=>{
    try {
        const country = req.params.country;
        // Retreiving important info related to the country.
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);

        const {name: {common,official}, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borders, area, population, timezones, continents, flags: {png,alt}, capitalInfo} = response.data[0];

        // console.log(common, official, independent, currencies, capital, altSpellings, region, subregion, languages, latlng, landlocked, borders, area, population, timezones, continents, png, alt, capitalInfo);

        let otherNames=altSpellings.join(" or ");
        let capitalLatLng=capitalInfo.latlng.join(",");
        let latLng=latlng.join(",");

        let countrysContinents="";
        continents.length>1?countrysContinents+=`continents of ${continents.toString()}`:countrysContinents+=`continent of ${continents[0]}`;
        
        let borderCountries="";

        if (borders){
            const borderCountriesCodes = borders.toString();
            let cnt=0;
            
            // Retreiving names of countries surrounding the country in question, from their country codes.
            const response2 = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${borderCountriesCodes}`);

            if(Object.keys(response2.data).length>1){
                for (const borderCountry of response2.data){
                    const {name: {common: country}} = borderCountry;

                    cnt+=1;

                    if (Object.keys(response2.data).length==cnt){
                        borderCountries+="and "+country;
                    }
                    else{
                        borderCountries+=country+", ";
                    }
                };
            }
            else{
                borderCountries+=response2.data[0].name.common;
            }
        }

        let countrysCurrenciesCode=[];
        let countrysCurrenciesName=[];
        let countrysCurrenciesSymbol=[];
        let countrysCurrencies="";

        for (const currency in currencies){
            const {name,symbol} = currencies[currency];
            
            countrysCurrenciesCode.push(currency);
            countrysCurrenciesName.push(name);
            countrysCurrenciesSymbol.push(symbol);
        }

        if(Object.keys(currencies).length>1){
            countrysCurrencies+=`${countrysCurrenciesCode.join(", ")} are the currencies of ${common}, respectively they are known as ${countrysCurrenciesName.join(", ")} and their symbols are ${countrysCurrenciesSymbol.join(", ")}.`;
        }
        else{
            countrysCurrencies+=`${countrysCurrenciesCode.toString()} is the currency of ${common}. It is known as ${countrysCurrenciesName.toString()} and its symbol is ${countrysCurrenciesSymbol.toString()}.`;
        }

        let languagesList=[];
        let countrysLanguages="";

        for (const language in languages){
           languagesList.push(languages[language]);
        }

        (Object.keys(languages).length>1)?countrysLanguages+=` ${languagesList.join(", ")} are the languages spoken in ${common}.`:countrysLanguages+=` ${languagesList[0]} is the language spoken in ${common}.`;

        let countrysTimezones=timezones.join(", ");

        (timezones.length>1)?countrysTimezones+=` are the timezones of ${common}.`:countrysTimezones+=` is the timezone of ${common}.`;

        let countryIndependent="";

        (independent)?countryIndependent+=` ${common} is an independent country.\n\n`: countryIndependent+=` ${common} is not an independent country.\n\n`;

        let countryLandlocked="";

        (landlocked)?countryLandlocked+=` It is a landlocked country.`: countryLandlocked+=` It is not a landlocked country.`;

        const info = {common, official, countryIndependent, countrysCurrencies, capital, otherNames, region, subregion, countrysLanguages, latLng, countryLandlocked, borderCountries, area, population, countrysTimezones, countrysContinents, png, alt, capitalLatLng};

        // console.log(info);
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;