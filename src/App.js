import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn'
import SignUp from './SignUp'
import InputButton from './InputButton'

function App() {
  return (
    <div className="App">
      <SignIn/>
      <h2>App</h2> 
      <SignUp/>
      <h2>App</h2>
      <h2>Welcome</h2>
      <h1> Hello, {props.name}</h1>;
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

export default App;


// const App = (props) => {
//   return (
//       <div className="main">
          
            
//    <p>{props.onclick} </p>

//       </div>
//   )
// }

// function app () {
//     returns (
//     <div className= "main">
      
//     </div>
//     );
//   }

//   const App = (props) => {
//     return (
//         <div className="main">
             
              
//      <p>{props.onclick} </p>
  
//         </div>
//     )
//   }

// function Welcome(props) { 
//   return 
  
// }

// const Welcome = (props) => {
//   return(
//     <div className="main">
      
//     </div>  )
//     const element = <welcome name="Preeti Sharma"/>;
// }

// function app  () {
//   const [data,setdata]=usestate(null)
//   const [print,setprint]=usestate(false)
//   function getdata(val) {
//     console.warn(val.target.value)  
//     setdata(val.target.value)
//   }
//   return(
//     <div classname="app">
      
//     </div>
//   );
// }

