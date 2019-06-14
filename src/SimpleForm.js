import React from 'react';
import Greetings from './Greetings';
import style from './style';
import TextField from './TextField';

class SimpleForm extends React.Component{
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: ""
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

    onLastNameBlur = () => {
        const lastName = this.state.lastName;
        const lastNameError = this.validateName(lastName);
        return this.setState({ lastNameError });        
    };

    onFirstNameChange = event =>
    this.setState({
        firstName: event.target.value
    });

    onLastNameChange = event =>
    this.setState({
        lastName: event.target.value
    });

    render(){
        const {firstNameError, firstName, lastName, lastNameError} = this.state;
        //const firstNameError = this.state.firstNameError;
        //const firstName = this.state.firstName;

        return(
            <div style={style.form}>
                <TextField name="firstName" 
                    label="First Name " 
                    onChange={this.onFirstNameChange}
                    onBlur={this.onFirstNameBlur} 
                    error={firstNameError}></TextField>

                <TextField name="lastName" 
                    label="Last Name " 
                    onChange={this.onLastNameChange}
                    onBlur={this.onLastNameBlur} 
                    error={lastNameError}></TextField>
                
                <Greetings firstName={firstName} lastName={lastName}/>
            </div>
        );
    }
}

export default SimpleForm;