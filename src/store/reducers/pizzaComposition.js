//Import the actions
import * as actions from './../actions/actions.js';

import { ingredientsInfoStatic } from './../../Special/IngredientsInfo.js';



//Initial state of the pizza composition: nothing
const initialState = {
};

Object.keys(ingredientsInfoStatic).forEach(key => {
  initialState[key] = 0;
});


//And now, the reducer
const reducer = (state = initialState, action) => {

  let newValue = '';
  let newState = {};
  switch(action.type)
  {
    case actions.COMPOSITION_INITIALIZE:
      return {...action.payload};
    case actions.COMPOSITION_INCREMENT:
      newValue = state[action.payload.ingredient] + 1;
      newState = {...state};
      newState[action.payload.ingredient] = newValue;
      return newState;
    case actions.COMPOSITION_DECREMENT:
      newValue = state[action.payload.ingredient] - 1;
      newState = {...state};
      newState[action.payload.ingredient] = newValue;
      return newState;
    default:
      return state;
  }

  // return state;
};

export default reducer;
