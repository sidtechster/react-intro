import React from 'react';
import './App.css';
import Greetings from './Greetings';
import SimpleForm from './SimpleForm';

//const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>

// Below is the function equivalent
/*function Greetings(props){
  return(
    <div>
      Hey you! {props.firstName} {props.lastName}!
    </div>
  )
}*/

const App = () => (
    <div className="App">
      <SimpleForm></SimpleForm>
    </div>
  );

export default App;
