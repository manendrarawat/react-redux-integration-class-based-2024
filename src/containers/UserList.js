
import React, { Component } from 'react';
import { connect } from 'react-redux';

import showUserDetails from '../actions/index';

class UserList extends Component {

    handleClick = (user) => {
        this.props.showUserDetails(user)
    }

    render() {
        return (
            <div>
                <h3>List of Users</h3>
                <div>
                {
                    this.props.users.map((user, index) =>{
                        return <div index={index} onClick={() => { this.handleClick(user)} }>{user.name}</div>
                    })
                }
                </div>
            </div>
        );
    }
}


const mapDispachToProps = dispatch => {
    return {
        showUserDetails: user => {
        dispatch(showUserDetails(user));
      }
    };
  };

function mapStateToProps(state){
    return {
       users: state.users
    }
}

export default connect(mapStateToProps, mapDispachToProps)(UserList);