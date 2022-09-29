import { createSlice } from '@reduxjs/toolkit';

export const inputColorSlice = createSlice({
    name: 'inputColor',
    initialState: false ,
    reducers: {
        changeInputValue: (state, action) => {
            const inputValue = action.payload;
            return inputValue;
        }
    }
})

export const { changeInputValue } = inputColorSlice.actions;

export default inputColorSlice.reducer;
