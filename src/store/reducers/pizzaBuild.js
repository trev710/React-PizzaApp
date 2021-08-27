//Actions
import * as actions from './../actions/actions.js';

const initialState = {
  isSaved: false,
  confirmationNumber: "0"
};
//Create new objects with spread operator
const reducer = (state = initialState, action) => {

  switch(action.type)
  {
    case actions.BUILD_SAVED:
      return {...state, isSaved: action.payload.isSaved};
    case actions.BUILD_CONFIRMATIONNUMBER:
      return {...state, confirmationNumber: action.payload.confirmationNumber};
    default:
      return state;
  }

  // return state;
};

export default reducer;
