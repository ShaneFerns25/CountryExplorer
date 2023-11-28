import { useState } from 'react';
import Card from '../../components/card/Card';
import './home.scss';

const Home = () =>{
    const [countryInfo,setCountryInfo] = useState({info:"info"});
    
    return(
        <div className='home'>
            <Card displayInfo="no" setCountryInfo={setCountryInfo} countryInfo={countryInfo}/>
            <span style={{marginRight: '10px'}}>bobby</span>
            <Card displayInfo="yes" setCountryInfo={setCountryInfo} countryInfo={countryInfo}/>
        </div>
    );
};

export default Home;