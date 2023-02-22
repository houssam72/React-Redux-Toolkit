const redux = require("redux");
const reduxLogger = require('redux-logger')
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
    return {
      type: ICECREAM_ORDERED,
      payload: qty
    }
  }
  function restockIceCream(qty = 1) {
    return {
      type: ICECREAM_RESTOCKED,
      payload: qty
    }
  }

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// };

const initialCakeState = {
    numOfCakes: 10
  }
  
  const initialIceCreamState = {
    numOfIceCreams: 20
  }

const Cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icacreamReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case CAKE_ORDERED:
        return { ...state, numOfCakes: state.numOfCakes - 1 };
      case CAKE_RESTOCKED:
        return {
          ...state,
          numOfCakes: state.numOfCakes + action.payload,
        };
      default:
        return state;
    }
  };

// const store = redux.createStore(icacreamReducer);

const rootReducer = redux.combineReducers({
    cake:Cakereducer,
    iceCream:icacreamReducer
})

const store=redux.createStore(rootReducer,redux.applyMiddleware(reduxLogger.createLogger()))
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
//   console.log("Update state", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(4))
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restockIceCream(4))

unsubscribe();
