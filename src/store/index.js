import { configureStore } from "@reduxjs/toolkit";
import colorsTypeSlice from "./slices/colorsType.slice";
import inputColorSlice from "./slices/inputColor.slice";
import itemsPerPageSLice from "./slices/itemsPerPage";
import themeSlice from "./slices/theme.slice";
import userNameSlice from "./slices/userName.slice";

export default configureStore({
    reducer: {
        userName: userNameSlice,
        theme: themeSlice,
        colorsType: colorsTypeSlice,
        inputColor: inputColorSlice,
        itemsPerPage: itemsPerPageSLice,
    }
})