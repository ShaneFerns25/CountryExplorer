import { useState } from 'react';
import Card from '../../components/card/Card';
import BackButton from '../../components/backButton/BackButton';
import './home.scss';

const Home = () =>{
    const [countryInfo,setCountryInfo] = useState({});
    const [flipCard,setFlipCard]=useState(false);
    const [isBackButtonHidden,setIsBackButtonHidden]=useState(true);
    
    return(
        <div className='home'>
            <BackButton isBackButtonHidden={isBackButtonHidden} setIsBackButtonHidden={setIsBackButtonHidden} flipCard={flipCard} handleFlip={(value)=>setFlipCard(value)}/>
            <div id="flipCard" className={`flipCard ${flipCard? 'flip':''}`}>
                <Card displayInfo="no" flipCard={flipCard} handleFlip={(value)=>setFlipCard(value)} setCountryInfo={setCountryInfo} countryInfo={countryInfo} setIsBackButtonHidden={setIsBackButtonHidden}/>
                <Card displayInfo="yes" flipCard={flipCard} handleFlip={(value)=>setFlipCard(value)} setCountryInfo={setCountryInfo} countryInfo={countryInfo} setIsBackButtonHidden={setIsBackButtonHidden}/>
            </div>
        </div>
    );
};

export default Home;