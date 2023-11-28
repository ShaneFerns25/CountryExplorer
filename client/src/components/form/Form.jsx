import { useState } from 'react';
import TextField from '../textField/TextField';
import axios from 'axios';

const Form = ({sendInfo}) =>{
    const [isHidden, setIsHidden] = useState(true);

    const getCountryInfo = async (country) => {
        try {
            // console.log(country);
            const res = await axios.get(`/countries/${country}`);
            console.log(res.data);
            sendInfo(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    function getCountryDetails(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const country = formData.get("country");
        
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
        <form onSubmit={getCountryDetails}>
            <h3>Enter the name of a country</h3>
            <TextField type="text" id="country" name="country"/>
            <br/>
            <span hidden={isHidden}>Please enter a country</span>
            <br hidden={isHidden}/>
            <TextField type="submit" id="submit" name="submit"/>
        </form>
    );
};

export default Form;