import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectUser from '../actions';

const UserList = () => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleClick = (user) => {
        dispatch(selectUser(user))
    }

    return (
        <div>
                <h3>List of Users</h3>
               <div>
                {
                    users.map((user, index) =>{
                        return <div key={index} onClick={ () => {handleClick(user)}}>{user.name}</div>
                    })
                }
                </div>
            </div>
    );
};

export default UserList;