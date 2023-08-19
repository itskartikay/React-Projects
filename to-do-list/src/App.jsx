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
  }

  const deleteItems = (id) => {
    console.log("clicked")

    setNewEle((oldItem)=>{
      return oldItem.filter( (arrEle, index) => {

        return index!==id;

      })
    })
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

            {newEle.map((item,index)=>{
              return <List
                itemVal={item}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            })}

          </ol>
        </div>

      </div>



    </>
    
  );
}

export default App;
