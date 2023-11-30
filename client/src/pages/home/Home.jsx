import { useState,useEffect } from 'react';
import Card from '../../components/card/Card';
import './home.scss';

const Home = () =>{
    const [countryInfo,setCountryInfo] = useState({});
    const [flipCard,setFlipCard]=useState(false);
    
    return(
        <div className='home'>
            <div id="flipCard" className={`flipCard ${flipCard? 'flip':''}`}>
                <Card displayInfo="no" flipCard={flipCard} handleFlip={(value)=>setFlipCard(value)} setCountryInfo={setCountryInfo} countryInfo={countryInfo}/>
                <Card displayInfo="yes" flipCard={flipCard} handleFlip={(value)=>setFlipCard(value)} setCountryInfo={setCountryInfo} countryInfo={countryInfo}/>
            </div>
        </div>
    );
};

export default Home;