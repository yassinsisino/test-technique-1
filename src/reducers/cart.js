import * as actionTypes from 'actions/actionTypes';

const inititalState = {
  cart: [],
};

const addToCart = (state, action) => {
  let cart = state.cart;
  let flag = 0;

  cart.forEach((value) => {
    if (value.id === action.id) {
      value.count += 1;
      flag = 1;
      return;
    }
  })

  if (!flag) cart.push({ id: action.id, count: 1 });

  return { cart };
}

const removeFromCart = (state, action) => {
  let cart = state.cart;

  cart.forEach((value, index) => {
    if (value.id === action.id) {
      value.count -= 1;
      if (value.count === 0) cart.splice(index, 1);
    }
  })

  return { cart };
}

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);
    case actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};
  
export default reducer;