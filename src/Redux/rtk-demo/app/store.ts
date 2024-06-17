import { configureStore } from "@reduxjs/toolkit";

const cakeReducer = require('../features/cake/cakeSlice')
const icecreamActions = require("../features/icecream/icecreamSlice");

const store = configureStore({
    reducer: {
        cakeReducer,
        icecreamActions
    },
});

module.exports = store;