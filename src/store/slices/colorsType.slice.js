import { createSlice } from "@reduxjs/toolkit";

export const colorsTypeSlice = createSlice({
    name: 'colorsType',
    initialState:
        [
            {
                name: "normal",
                color: "#735159"
            },
            { 
                name: 'fighting',
                color: "#973f26", 
            },
            { 
                name: "flying",
                color: "#48677b", 
            },
            { 
                name: "poison",
                color: "#5b2d86", 
            },
            { 
                name: "ground",
                color: "#a37324", 
            },
            {
                name: "rock",
                color: "#46180b",
            },       
            { 
                name: "bug",
                color: "#8bc34a", 
            },
            { 
                name: "ghost",
                color: "#31336a", 
            },
            { 
                name: "steel",
                color: "#5d736c", 
            },
            { 
                name: "fire",
                color: "#fb6c6c", 
            },
            { 
                name: "water",
                color: "#70b7fa", 
            },
            { 
                name: "grass",
                color: "#48d0b0", 
            },
            { 
                name: "electric",
                color: "#e2e02d", 
            },
            { 
                name: "psychic",
                color: "#a12b6a", 
            },
            { 
                name: "ice",
                color: "#86d2f4", 
            },
            { 
                name: "dragon",
                color: "#448a94", 
            },
            { 
                name: "dark",
                color: "#030706", 
            },
            { 
                name: "fairy",
                color: "#981844", 
            },
            { 
                name: "shadow",
                color: "#000000", 
            },
            { 
                name: "unknown",
                color: "#ffeb3b" 
            }
        ],
    reducers: {
        
    }
})

export const { } = colorsTypeSlice.actions;
export default colorsTypeSlice.reducer;
