import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUsers,
  deleteUser, 
  addAllUsers,
  addNewUser,
} from '../slice/UserSlice';
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import ListItem from '../components/listItem/ListItem';

function Users() {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    //const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [first_name, setFirstname] = useState(''); 
    const [lastname, setLastname] = useState(''); 
    useEffect(() => {
      if(users.length === 0) {
        fetch("https://reqres.in/api/users?per_page=12")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            dispatch(addAllUsers(result.data));
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
      }
    }, []);
    const newUser = (e) => {
      e.preventDefault();
      const user = {
        first_name,
      };
      dispatch(addNewUser(user))
  };
    return (
      <div className="wrapper">
        <ul>
        {users.map((item, index) => {
          return (
            <ListItem key={item.first_name+index} text={item.first_name}  myClick={(e) => {dispatch(deleteUser(index))}}/>
            // <li key={item.first_name+index}>
            //   {item.first_name}
            //   <Button text='del' myClick={(e) => {dispatch(deleteUser(index))}} />
            // </li> 
          );
        })}
        </ul>
        <form onSubmit={(e) => newUser(e)}>
          <Input type='text' name='first_name' myChange={(data) => {setFirstname(data)}}/>
          <Button text='add' />
        </form>

      </div>
    );
  }

  export default Users;