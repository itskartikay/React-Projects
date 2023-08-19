import React from "react";

const List = (props) => {
    return(
        <>
            <button>-</button>
            <li>{props.itemVal}</li>

        </>
      )
}

export default List;