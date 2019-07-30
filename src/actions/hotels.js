import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setItems = (items) => ({
    type: actionTypes.SET_ITEMS,
    items,
});

export const initItems = () => {
    return dispatch => {
        axios
            .get('https://tests-d7fe8.firebaseio.com/hotels.json')
            .then(response => {
               dispatch(setItems(response.data));
            })
            // .catch( error => {
            //     dispatch(fetchItemsFailed());
            // } );
    };
};