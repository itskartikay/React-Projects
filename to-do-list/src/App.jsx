import React, { useState } from "react";
import "./App.css"
import List from "./List";


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

  setEle("")

  // event.preventDefault();
  // setNewEle(ele)
}

  return (
    <>
      <div className="main-box">

        <h1> To Do List</h1>
        <br/>
        <input type="text" placeholder="Add Items" onChange={inputEvent} value={ele}/>
        <br/>
        <button onClick={clicked}>+</button>


        <br/>
          <div className="list-items">
          <ol>
            {/* <li>{newEle}</li> */}

            {newEle.map((item)=>{
              return <List
                itemVal={item}
              />
            })}

          </ol>
        </div>

      </div>



    </>
    
  );
}

export default App;
