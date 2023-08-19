import React from "react";

const List = (props) => {

    

    return(
        <>
            <button onClick={() => {
                props.onSelect(props.id)
                }}>-</button>


            <li>{props.itemVal}</li>

        </>
      )
}

export default List;