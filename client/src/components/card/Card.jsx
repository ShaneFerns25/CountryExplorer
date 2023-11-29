import { useState } from 'react';
import Form from '../form/Form';
import './card.scss';

const Card = ({displayInfo, setCountryInfo, countryInfo, countryDetails, setCountryDetails}) =>{
    let info="";

    if(displayInfo==="no"){
        return(
            <div className='card'>
                <Form sendInfo={(value) => setCountryInfo((prevState) => ({ ...prevState, info: value }))}/>
            </div>
        );
    }
    else{

        if(countryInfo.info!=="info"){
            info+=`Commonaly called ${countryInfo.info.common} and officialy known as ${countryInfo.info.official}. It is also known by other names such as ${countryInfo.info.otherNames}. ${countryInfo.info.common} covers an area of ${countryInfo.info.area} sq. km and has a population of ${countryInfo.info.population}. ${countryInfo.info.capital[0]} is the capital of ${countryInfo.info.common} and it is located at a latitude and longitude of (${countryInfo.info.capitalLatLng}).${countryInfo.info.countryIndependent}`;

            if(countryInfo.info.borderCountries){
                info+=`It is surrounded by ${countryInfo.info.borderCountries}. `
            }
            
            info+=`${countryInfo.info.countrysCurrencies}${countryInfo.info.countryLandlocked}${countryInfo.info.common} is part of the ${countryInfo.info.countrysContinents}. It is located at a latitude and longitude of (${countryInfo.info.latLng}), belonging to the region of ${countryInfo.info.region} and the subregion of ${countryInfo.info.subregion}.${countryInfo.info.countrysLanguages} ${countryInfo.info.countrysTimezones}`

            console.log(info);
            setCountryDetails(info);
        }
        return(
            <div className='card2'>
                <img width="200px" src={countryInfo.info?.png} alt={countryInfo.info?.alt}/>
                <br/>
                <p>{countryDetails}</p> {/*here is updating*/}
            </div>
        );
    }
};

export default Card;