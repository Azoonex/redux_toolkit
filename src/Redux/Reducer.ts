import { legacy_createStore } from "redux";
import productsReducer  from  './store/Products'

export const stores = legacy_createStore(productsReducer);




