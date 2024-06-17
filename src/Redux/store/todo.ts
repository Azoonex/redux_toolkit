import { createStore } from "redux";

const CAKE_ORDERRED = "CAKE_ORDERRED";
const CAKE_RESOCKED = "CAKE_RESOCKED";

function orderCake() {
    return {
        type: CAKE_ORDERRED,
        quantity: 1,
    };
}

function resockCake(qn = 1) {
    return {
        type: CAKE_RESOCKED,
        quantity: qn,
    };
}

// reducer

// (previousState,action) => newState

const initialState = {
    numofCake: 10,
    anotherProparty: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERRED:
            return {
                ...state,
                numofCake: state.numofCake - 1,
            };
        case CAKE_RESOCKED:
            return {
                ...state,
                numberOfCake : state.numofCake + action.quantity,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log('inital state' ,store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log("Update state" ,store.getState())
})   

store.dispatch(resockCake(10))
store.dispatch(orderCake())

unsubscribe()