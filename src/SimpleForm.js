import React from 'react';
import Greetings from './Greetings';

class SimpleForm extends React.Component{
    state = {
        firstName: "",
        firstNameError: ""
    };

    validateName = name => {
        const regex = /[A-Za-z]{3,}/;

        return !regex.test(name)
            ? "The name must contain at least three letters. Number and special characters not allowed."
            : "";
    };

    onFirstNameBlur = () => {
        const firstName = this.state.firstName;
        const firstNameError = this.validateName(firstName);
        return this.setState({ firstNameError });        
    };

    onFirstNameChange = event =>
    this.setState({
        firstName: event.target.value
    });

    render(){
        //const {firstNameError, firstName} = this.state;
        const firstNameError = this.state.firstNameError;
        const firstName = this.state.firstName;

        return(
            <div>
                <div>
                    <label>
                        First Name: &nbsp;
                        <input type="text" name="firstName" onChange={this.onFirstNameChange} onBlur={this.onFirstNameBlur} />
                        {firstNameError && <div>{firstNameError}</div>}
                    </label>
                </div>
                
                <Greetings firstName={firstName} />
            </div>
        );
    }
}

export default SimpleForm;