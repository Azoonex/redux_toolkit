import { configureStore } from "@reduxjs/toolkit";

const cakeReducer = require('../features/cake/cakeSlice')
const icecreamActions = require("../features/icecream/icecreamSlice");
import { createLogger } from "redux-logger";

const store = configureStore({
    reducer: {
        cakeReducer,
        icecreamActions
    },
    middleware: (getdDefaultMiddleware) => getdDefaultMiddleware().concat(createLogger),
    devTools: true,
    
});

module.exports = store;