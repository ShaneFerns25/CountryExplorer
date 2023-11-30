import { useState,useEffect } from 'react';
import Form from '../form/Form';
import './card.scss';

const Card = ({displayInfo, setCountryInfo, countryInfo, flipCard, handleFlip}) =>{
    let info="";
    // console.log(countryInfo);
    const [imageHidden,setImageHidden]=useState(true);
    const [countryDetails,setCountryDetails]=useState("");

    useEffect(()=>{
        if(Object.keys(countryInfo).length>0){
            info+=`Commonaly called ${countryInfo.common} and officialy known as ${countryInfo.official}. It is also known by other names such as ${countryInfo.otherNames}. ${countryInfo.common} covers an area of ${countryInfo.area} sq. km and has a population of ${countryInfo.population}. ${countryInfo.capital[0]} is the capital of ${countryInfo.common} and it is located at a latitude and longitude of (${countryInfo.capitalLatLng}).${countryInfo.countryIndependent}`;

            if(countryInfo.borderCountries){
                info+=`It is surrounded by ${countryInfo.borderCountries}. `
            }
            
            info+=`${countryInfo.countrysCurrencies}${countryInfo.countryLandlocked}${countryInfo.common} is part of the ${countryInfo.countrysContinents}. It is located at a latitude and longitude of (${countryInfo.latLng}), belonging to the region of ${countryInfo.region} and the subregion of ${countryInfo.subregion}.${countryInfo.countrysLanguages} ${countryInfo.countrysTimezones}`

            console.log(info);
            setImageHidden(false);
            setCountryDetails(info);
            handleFlip(!flipCard);
        }
    },[countryInfo]);

    if(displayInfo==="no"){
        return(
            <div className='card'>
                <Form sendInfo={(value) => setCountryInfo(value)}/>
            </div>
        );
    }
    else{
        return(
            <div className='card2'>
                <img hidden={imageHidden} width="200px" src={countryInfo?.png} alt={countryInfo?.alt}/>
                <br/>
                <p>{countryDetails}</p>
            </div>
        );
    }
};

export default Card;