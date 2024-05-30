import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";

import UserListReducer from './UserList';
import UserDetails from './UserDetails';


const rootReducer = combineReducers({
        users: UserListReducer,
        userDetails: UserDetails
});

const store = configureStore({
        reducer: rootReducer
});

export default store;