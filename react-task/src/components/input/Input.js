import React from 'react';
import './input.css';

function Input(props) {
    return (
        <input type='text' name='first_name' className='input' onChange={(e) => {props.myChange(e.target.value)}}/>
    );
} 

export default Input;