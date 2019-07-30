import React from 'react';
import { connect } from 'react-redux';
import Hotel from 'components/Hotels/Hotel/Hotel';
import Classes from './Hotels.module.css';

const hotels = ({ hotels, key }) => {
    return (
        <article className={Classes.Hotels}>
            {Object.keys(hotels).map((item, id) => (
                <Hotel key={[item][0]} id={[item][0]} item={hotels[item]} />
            ))}
        </article>
    )
}

const mapDispatchToProps = (state) => ({
    hotels: state.hotels.hotels,
});

export default connect(mapDispatchToProps)(hotels);