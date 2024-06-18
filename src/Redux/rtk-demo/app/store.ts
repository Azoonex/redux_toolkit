import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice";
import icecreamSlice from "../features/icecream/icecreamSlice";
import todoSlice from "../features/todo/todo";

const store = configureStore({
    reducer: {
         cake : cakeSlice,
         icecream :icecreamSlice,
         todo : todoSlice
    },
    devTools: true
});

export default store
