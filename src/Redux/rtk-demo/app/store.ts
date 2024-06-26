import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice";
import icecreamSlice from "../features/icecream/icecreamSlice";
import todoSlice from "../features/todo/todo";
import  prodcutSlice from "../features/product/productSlice";
import users from "../features/user/userSlice"

const store = configureStore({
    reducer: {
         cake : cakeSlice,
         icecream :icecreamSlice,
         todo : todoSlice,
         prodcuts : prodcutSlice,
         user :  users
    },
    devTools: true
});

export default store
