import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfCake: 10,
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        orderred: (state) => {
            state.numOfCake--;
        },
        restocked: (state, action) => {
            state.numOfCake += action.payload;
        },
    },
});


module.exports = cakeSlice.reducer
module.exports = cakeSlice.actions
