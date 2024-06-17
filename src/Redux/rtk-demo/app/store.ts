import { configureStore } from "@reduxjs/toolkit";

const cakeReducer = require('../features/cake/cakeSlice')

const store = configureStore({
    reducer: {
        cakeReducer,
    },
});

module.exports = store;