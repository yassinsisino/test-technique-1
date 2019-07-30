import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from 'actions';
import Classes from './Cart.module.css';

const cart = ({ hotels, cart: { cart, count, amount }, removeFromCart }) => {
    const handleRemove = (id) => {
        removeFromCart(id);
    }

    let total = 0;

    cart.forEach(({ id, count }) => {
        const miniTotal = parseInt(hotels[id].price) * parseInt(count);
        total += miniTotal;
    });

    return (
        <aside className={Classes.Cart}>
            <h1> PANIER </h1>
            <br />
            {!cart[0] ?
                <div className={Classes.empty}>
                    Nothing !
                </div>
                :
                cart.map(({ id, count }) => (
                <div key={id} className={Classes.Item}>
                    <div className={Classes.Aside}>
                        <img className={Classes.Mini} src={hotels[id].path} alt={hotels[id].name} height="50" width="50" />
                    </div>
                    <div>
                        <button className={Classes.Button} onClick={() => handleRemove(id)} > - </button>
                        <p> {count} x {hotels[id].price}€ </p>
                    </div>
                </div>
                ))
            }
            {cart[0] &&
            <div className={Classes.AmountWrapper}>
                <p className={Classes.Amount}>
                    <span style={{ fontSize: '0.7em' }}> TOTAL </span>
                    <span>
                        {total}€
                    </span>
                </p>

                <NavLink to="/checkout" >
                    <button type="submit" className={Classes.Checkout}> Checkout </button>
                </NavLink>    
            </div>}
        </aside>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    hotels: state.hotels.hotels
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(actions.removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cart);