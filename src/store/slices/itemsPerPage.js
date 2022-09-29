import { createSlice } from "@reduxjs/toolkit";

export const itemsPerPageSLice = createSlice({
    name: 'itemsPerPage',
    initialState: 6,
    reducers: {

        selectValue: (state, action) => {
            const selectValue = action.payload;
            return Number(selectValue)
        }

    }
})

export const { selectValue } = itemsPerPageSLice.actions;
export default itemsPerPageSLice.reducer;