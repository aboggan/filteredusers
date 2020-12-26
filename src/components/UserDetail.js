import React from 'react';


function UserDetail(props){
    return (
        <div onClick={props.handleClick} id={props.name}>
            <p id={props.uid}><img src={props.src} alt={props.name} /> {props.name} {' ' }{props.last}</p>
        </div>
    )
}

export default UserDetail;