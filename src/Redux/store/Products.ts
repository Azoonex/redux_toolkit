import {actionProduct } from "../../type/storeType"

const addProduct = "ADD_PRODUCT"
const removeProduct = "REMOVE_PRODUCT"

export default function reducer(state:string | number | boolean [] =[] , action: actionProduct) {
    switch (action.type) {
        case addProduct:
            let newProduct = action.payload;
            return [...state, newProduct];
            break;
        case removeProduct:
            const newState = [...state].filter(
                (product) => product.id !== action.id
            );
            return newState;
            break;
            default :{
                return state
            }
    }
}

