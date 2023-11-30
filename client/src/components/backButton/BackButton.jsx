import './backButton.scss';

const BackButton = ({isBackButtonHidden, setIsBackButtonHidden, flipCard, handleFlip})=>{

    const handleFlipCard =()=>{
        setIsBackButtonHidden(!isBackButtonHidden);
        handleFlip(!flipCard);
    }

    return(
        <div className='back' hidden={isBackButtonHidden}>
            <button className='bubbly-button' onClick={handleFlipCard}>Back</button>
        </div>
    );
};

export default BackButton;