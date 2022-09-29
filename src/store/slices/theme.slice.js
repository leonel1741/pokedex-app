import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: 'light',
    reducers: {
        changeTheme: (state, action) => {
            const toggleTheme = action.payload;
            if(toggleTheme) {
                return 'light';
            } else {
                return 'dark';
            }
        }
    }
})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;