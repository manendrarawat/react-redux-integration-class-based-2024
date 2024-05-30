import React from 'react';

import { useSelector } from 'react-redux';



const UserDetail = () => {

    const userDetails = useSelector(state => state.userDetails);

    return (<div>
                <h3>User Details</h3>
                <div>Title: {userDetails.name}</div>
                <div>Pages: {userDetails.age}</div>
            </div>)
        
    
}

export default UserDetail;

