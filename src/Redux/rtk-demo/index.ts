const store = require("./app/store")
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions

console.log('Initila state',store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('Updated State',store.getState());
})

store.dispach(cakeActions.orderred())
store.dispach(cakeActions.orderred())
store.dispach(cakeActions.orderred())
store.dispach(cakeActions.restocked(3))

store.dispach(cakeActions.restocked(3))

unsubscribe()