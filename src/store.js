import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer.js"

const logMiddleware = () => (dispatch) => (action) => {
     console.log(action.type);
     return dispatch(action);
};

const stringMiddleware = (store) => (dispatch) => (action) => {
     if(typeof action === 'string'){
          return dispatch({type: action});
     }

     return dispatch(action); 
}



const store = createStore(reducer, applyMiddleware(thunk, stringMiddleware, logMiddleware));

let delayedActionCreator = (timeout) => (dispatch) => {
     setTimeout(() => dispatch({type: "DELAYED_ACTION"}), timeout)
};

store.dispatch(delayedActionCreator(4000));

export default store;