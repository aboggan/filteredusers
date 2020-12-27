import React from "react";

function Searchbox(props) {
    return (
        <div>
            <input onChange={props.handleInput} onBlur={props.handleOnBlur} type="text"/>
        </div>
    )
}

export default Searchbox;