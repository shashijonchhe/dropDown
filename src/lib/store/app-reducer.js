import { combineReducers } from "redux";

const initialState = {
  cities: ["San Jose", "La", "Sunnyvale", "santa clara"]
};

const reducer = (action, state = initialState) => {
  // switch(action.type){
  //   default:
  //     return state
  // }
  return state;
};

const appReducer = combineReducers({ reducer });

export default appReducer;
