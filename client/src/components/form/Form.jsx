import { useState } from 'react';
import TextField from '../textField/TextField';
import axios from 'axios';
import './form.scss';

const Form = ({sendInfo}) =>{
    const [isHidden, setIsHidden] = useState(true);

    const getCountryInfo = async (country) => {
        try {
            // console.log(country);
            const res = await axios.get(`/countries/${country}`);
            console.log(res.data);
            sendInfo(res.data);
        } catch (err) {
            console.log(err.response.data);
        }
    };

    function getCountryDetails(event) {
        event.preventDefault();
        let country;

        if(event.type==="click"){
            country = document.getElementById("country").value;
        }
        else{
            const formData = new FormData(event.target);
            country = formData.get("country");
        }

        if(country){
            if(!isHidden){
                setIsHidden(prevValue=>{
                    return !prevValue;
                });
            }
            getCountryInfo(country);
        }
        else{
            setIsHidden(prevValue=>{
                return !prevValue;
            });
        }
    }

    return(
        <form id='form' className='form' onSubmit={getCountryDetails}>
            <span>Enter the name of a country</span>
            <br/>
            <TextField type="text" id="country" name="country"/>
            <br/>
            <span hidden={isHidden}>Please enter a country</span>
            <br hidden={isHidden}/>
            
            <a onClick={getCountryDetails}>
                <TextField type="submit" id="submitBtn" name="submitBtn"/>
                <div className='wave'></div>
            </a>
        </form>
    );
};

export default Form;