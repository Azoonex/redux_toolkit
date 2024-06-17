console.log("create Action");

const CAKE_ORDERRED = "CAKE_ORDERRED";

function orderCake() {
    return {
        type: CAKE_ORDERRED,
        quantity: 1,
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
        default:
            return state;
    }
};
