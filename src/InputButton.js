function app = () => {
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
    export default InputButton;