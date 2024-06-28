import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginInfo:{
        token:null,
    }
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    
    reducers: {
        setLoginInfo: (state, action) => {
            console.log(action.payload)
            state.loginInfo = action.payload
        }
    }
}) 

export const { setLoginInfo } = userSlice.actions
export default userSlice.reducer