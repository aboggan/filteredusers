import React from "react";

function Searchbox(props) {
    return (
        <div>
            <input onChange={props.handleInput} type="text"/>
        </div>
    )
}

export default Searchbox;