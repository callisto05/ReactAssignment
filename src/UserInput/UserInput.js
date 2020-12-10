import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className = "user">
            <input className='userinput' onChange={props.changeName} value = {props.name}></input>
        </div>
    );


}

export default userInput;