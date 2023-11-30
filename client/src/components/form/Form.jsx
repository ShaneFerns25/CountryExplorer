import { useState } from 'react';
import TextField from '../textField/TextField';
import axios from 'axios';
import './form.scss';

const Form = ({sendInfo, isCleared, setIsCleared}) =>{
    const [isHidden, setIsHidden] = useState(true);

    const getCountryInfo = async (country) => {
        try {
            // console.log(country);
            const res = await axios.get(`/countries/${country}`);
            console.log(res.data);
            sendInfo(res.data);
        } catch (err) {
            console.log(err.response.data,err.response.data.status);
            if(err.response.data.status===404){
                setIsHidden(false);
            }
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
                setIsHidden(!isHidden);
            }
            getCountryInfo(country);
        }
        else{
            setIsHidden(false);
        }
    };

    return(
        <form id='form' className='form' onSubmit={getCountryDetails}>
            <span id='heading'>Enter the name of a country</span>
            <br/>
            <TextField type="text" id="country" name="country" isCleared={isCleared} setIsCleared={setIsCleared}/>
            <br/>
            <span id='error' hidden={isHidden}>Please enter a common or official name</span>
            <br hidden={isHidden}/>
            
            <button onClick={getCountryDetails}>
                <TextField type="submit" id="submitBtn" name="submitBtn" isCleared={isCleared} setIsCleared={setIsCleared}/>
                <div className='wave'></div>
            </button>
        </form>
    );
};

export default Form;