import TextField from '../textField/TextField';

const Form = () =>{
    return(
        <form>
            <h3>Enter the name of a country</h3>
            <TextField type="text"/>
            <br/>
            <TextField type="submit"/>
        </form>
    );
};

export default Form;