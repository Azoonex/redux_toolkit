import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initialValue : 1
};


const  prodcutSlice = createSlice({
    name : "product",
    initialState,
    reducers: {
        addProdcut : (state)=>{
            state.initialValue++
        },
        incrementPorduct : (state)=>{
            state.initialValue--
        },   
        productRemove : (state)=>{
            state = initialState
        }  
    }
})

export default prodcutSlice.reducer;
export const { addProdcut, incrementPorduct, productRemove } = prodcutSlice.actions;
