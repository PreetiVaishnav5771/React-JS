import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Write a program that displays “Hello World!”.

ReactDOM.render(
  <h1>Hello World !!</h1>,
  document.getElementById('root')
);

// Create a “Text” Component which accepts a message(string) as props, and display it.

function Welcome(props) { 
  return <h1> Hello, {props.name}</h1>;
}
const element = <welcome name="Preeti Sharma"/>;
ReactDOM.render(
 element,
 document.getElementById('root')
);

// Create a “Button” Component which accepts, label(string) and onClick(function) as props. onClick function to be called when you click on the button.

function signin(props){
  returns (
  <button onclick={props.onclick}>
    Sign In
  </button>
  );
}

function signup (props) {
  returns (
  <button onclick={props.onclick}>
    Sign Up
  </button>
  );
}
ReactDOM.render(
props,
document.getElementById('root')
);

//...........Create an “InputText” component. This component will take Placeholder, value and handleChange as props. Placeholder will be shown, when there is no value. Value Props is the value that needs to be displayed in the input component. handleChange will call the function whenever the value of the input field is changed.

//......Let’s create a page using the above component. Take input from the user in the “Input” component. When the user clicks on the Button component, then show the input text in the “Text” component and empty the Input component.

import './styles.css';
import test from './test.js';
import react, {usestate} from 'react'
function app(){
  const [data,setdata]=usestate(null)
  const [print,setprint]=usestate(false)
  function getdata(val) {
    console.warn(val.target.value)
    setdata(val.target.value)
  }
  return(
    <div classname="app">
      {
        print?
        <h1>{data}</h1>
        :null
      }
      <input type= "text" onchange={getdata}/>
      <button onclick ={()=>setprint(true)}>Print Data</button>
    </div>
  );
}

export default function app;