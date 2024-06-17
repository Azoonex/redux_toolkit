console.log("create Action");

const ADD_TODO = "CAKE_ORDERRED";

function orderCake() {
    return {
        type: ADD_TODO,
        quantity: 1,
    };
}
