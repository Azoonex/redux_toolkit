import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initialValue: 0,
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        ordered: (state) => {
            state.initialValue++;
        },
        decrement: (state) => {
            state.initialValue--;
        },
        reset: (state) => {
            return initialState
        },
    },
});

export const { ordered, decrement, reset } = todoSlice.actions;
export default todoSlice.reducer;
