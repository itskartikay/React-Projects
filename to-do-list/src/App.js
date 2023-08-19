import React, { useState } from "react";
import "./App.css"


const App = () => {
  
const [ele, setEle] = useState("");
const [newEle, setNewEle ] = useState([]);

const inputEvent = (event) =>{
  setEle(event.target.value);
}

const clicked = () =>{

  setNewEle((oldItem)=>{
    return [...oldItem, ele]
  })

  // event.preventDefault();
  // setNewEle(ele)
}

  return (
    <>
      <div className="main-box">

        <h1> To Do List</h1>
        <br/>
        <input type="text" placeholder="Add Items" onChange={inputEvent}/>
        <br/>
        <button onClick={clicked}>+</button>


        <br/>
        <ol>
          {/* <li>{newEle}</li> */}

          {newEle.map((item)=>{
            return <li>{item}</li>
          })}

        </ol>

      </div>



    </>
    
  );
}

export default App;
