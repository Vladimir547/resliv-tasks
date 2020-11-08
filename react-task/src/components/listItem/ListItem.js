import React from 'react';
import Button from '../button/Button';
import './listItem.css'

function ListItem(props) {
    return (
    <li className='list__item'>
        {props.text}
        <Button text='del' myClick={props.myClick} />
    </li> 
    );
}
export default ListItem;