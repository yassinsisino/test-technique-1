import * as actionTypes from 'actions/actionTypes';

const inititalState = {
  hotels: []
};

const setItems = (state, action) => {
    const hotels = action.items;

    return { hotels };
};

const reducer = (state = inititalState, action) => {
    switch (action.type) {
      case actionTypes.SET_ITEMS:
        return setItems(state, action);
      default:
        return state;
    }
  };
  
  export default reducer;