import { configureStore } from "@reduxjs/toolkit";
import usersReducers from './users/usersSlice'

const store = configureStore({
    reducer: {
        users: usersReducers,
    }
})
export default store;