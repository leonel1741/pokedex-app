import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice ({
    name: 'userName',
    initialState: '',
    reducers: {
        changeUserName: (state, action) => {
            const userName = action.payload;
            return userName; 
        }
    }    
})

export const { changeUserName } = userNameSlice.actions;
export default userNameSlice.reducer;