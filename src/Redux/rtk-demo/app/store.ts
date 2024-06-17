import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice";
import icecreamSlice from "../features/icecream/icecreamSlice";
const store = configureStore({
    reducer: {
         cake : cakeSlice,
         icecream :icecreamSlice,
    },
});

export default store
