import React from 'react';
import './button.css';
function Button(props) {
    return (
        <button className='button-item' onClick={props.myClick }>{props.text}</button>
    );
} 

export default Button;