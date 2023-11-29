import { useState } from 'react';
import Card from '../../components/card/Card';
import './home.scss';

const Home = () =>{
    const [countryInfo,setCountryInfo] = useState({info:"info"});
    const [countryDetails,setCountryDetails]=useState("");
    
    return(
        <div className='home'>
            <Card displayInfo="no" setCountryInfo={setCountryInfo} countryInfo={countryInfo}/>
            <span style={{marginRight: '10px'}}>b</span>
            <Card displayInfo="yes" countryDetails={countryDetails} setCountryDetails={setCountryDetails} setCountryInfo={setCountryInfo} countryInfo={countryInfo}/>
        </div>
    );
};

export default Home;