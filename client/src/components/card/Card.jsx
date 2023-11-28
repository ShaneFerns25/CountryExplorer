import { useEffect } from 'react';
import Form from '../form/Form';
import './card.scss';

const Card = ({displayInfo, setCountryInfo, countryInfo}) =>{
    let info="";

    useEffect(() => {
        console.log(countryInfo.info); 
    }, [countryInfo]);

    if(displayInfo==="no"){
        return(
            <div className='card'>
                <Form sendInfo={(value) => setCountryInfo((prevState) => ({ ...prevState, info: value }))}/>
            </div>
        );
    }
    else{
        if(countryInfo.info!=="info"){
        info+=`Commonaly called ${countryInfo.info.common} and officialy known as ${countryInfo.info.official}. It is also known by other names such as ${countryInfo.info.othernames}. ${countryInfo.info.common} covers an area of ${countryInfo.info.area} sq. km and has a population of ${countryInfo.info.population}. ${countryInfo.info.capital[0]} is the capital of ${countryInfo.info.common} and it is located at a latitude and longitude of (${countryInfo.info.capitalLatLng}).`;

        (countryInfo.info.independent)?info+=` It is an independent country.`: info+=` It is not an independent country.`;

        if(countryInfo.info.borderCountries){
            info+=` It is surrounded by ${countryInfo.info.borderCountries}.`
        }

        if(countryInfo.info.currencies){
            // let countrysCurrencies=[];
            // Object.keys(currencies).length>1?countrysCurrencies+=`${curren.toString()}`:countrysCurrencies+=`continent of ${continents[0]}`;

            // for (currency of countryInfo.info.currencies){
            //     const {name,symbol} = currency;
            //     console.log(name,symbol,currency);
            // }

            // info+=``
        }

        (countryInfo.info.landlocked)?info+=` It is a landlocked country.`: info+=` It is not a landlocked country.`;

        info+=`${countryInfo.info.common} is part of the ${countryInfo.info.countrysContinents}. It is located at a latitude and longitude of (${countryInfo.info.latLng}). It belongs to the region of ${countryInfo.info.region} and the subregion of ${countryInfo.info.subregion}.`

        if(countryInfo.info.languages){
            //remaining
        }

        if(countryInfo.info.timezones){
            //remaining
        }

        console.log(info);
        }
        return(
            <div className='card2'>
                <img width="200px" src={countryInfo.info?.png} alt={countryInfo.info?.alt}/>
                <p></p> {/*here is not updating*/}
            </div>
        );
    }
};

export default Card;