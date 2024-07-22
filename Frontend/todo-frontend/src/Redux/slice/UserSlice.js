import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginInfo:{
        token:null,
    },

    createUser: {},
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    
    reducers: {
        setLoginInfo: (state, action) => {
            state.loginInfo = action.payload
        },
        createUserSlice: (state, action) => {
            console.log("Action payload:", action.payload);
            state.createUser = action.payload
        }
    }
}) 

export const { setLoginInfo, createUserSlice } = userSlice.actions
export default userSlice.reducer