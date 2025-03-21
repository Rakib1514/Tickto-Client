import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initial: {
        user: null,
        loading: false, 
        error: null
    },
    reducers: {
        
    }
})