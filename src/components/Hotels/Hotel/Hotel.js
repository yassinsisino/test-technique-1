import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import classes from './Hotel.module.css';

const hotel = ({ addToCart, id, item: { name, price, description, path } }) => {
    const handleAdd = () => {
        addToCart(id);
    }

    return (
        <section className={classes.Hotel}>
            <aside className={classes.Aside}>
                <img src={path} alt={name} height="300" width="300"/>
            </aside>
            <div className={classes.Informations}>
                <header className={classes.Header}>
                    <div>
                        <h1>{name}</h1>
                        <button onClick={handleAdd} className={classes.Button}> Add </button>
                    </div>
                    <p>{price}€ <br /> prix/nuit</p>
                </header>
                <p className={classes.Description}>
                    {description}
                </p>
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(actions.addToCart(item))
})

export default connect(null, mapDispatchToProps)(hotel);