import { useEffect } from "react";

const TextField = ({type, id, name, isCleared, setIsCleared}) =>{

    useEffect(()=>{
        if (isCleared){
            document.getElementById("country").value='';
            setIsCleared(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isCleared]);

    if (type==="text"){
        return(
            <input type={type} id={id} name={name}/>
        );
    }
    else{
        return(
            <input type={type} id={id} name={name}/>
        );
    }
};

export default TextField;