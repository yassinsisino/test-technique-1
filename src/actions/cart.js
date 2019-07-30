import * as actionTypes from './actionTypes';

export const addToCart = (id) => ({
    type: actionTypes.ADD_TO_CART,
    id,
});

export const removeFromCart = (id) => ({
    type: actionTypes.REMOVE_FROM_CART,
    id,
});