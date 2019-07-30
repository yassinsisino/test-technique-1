import React, { Component } from 'react';
import { connect } from 'react-redux'
import Input from 'components/UI/Input/Input';
import Layout from 'hoc/Layout/Layout';
import Classes from './Checkout.module.css';

class checkout extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        errors: {
            email: 'Cannot be empty!'
        },
        formIsValid: false,
        submitted: false,
        confirmed: false
    }

    addError = (field, msg) => {
        const { errors } = this.state;
        errors[field] = msg;
        this.setState({ errors });
      };
    
    clearError = (field) => {
        const { errors } = this.state;
        delete errors[field];
        this.setState({ errors });
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value, formIsValid: false })
        const { errors } = this.state;

        let error = null;
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    
        if (name === 'email') {
            this.clearError(name);
            if (value === '')
                error = 'Cannot be empty!';
            else if (!regex.test(value))
                error = 'No match'; 
            else if (value.length > 50)
                error = `50 characters max.`;
        }
        if (error) {
            this.addError(name, error);
        }

        if (!errors.email) {
            this.setState({ formIsValid: true })
          }
    }

    submit = (e) => {
        e.preventDefault();

        const { formIsValid } = this.state;
        if (formIsValid)
            this.setState({ submitted: true });
    } 

    render () {
        const { firstName, lastName, email, address, errors, submitted, formIsValid, confirmed } = this.state;
        const { hotels, cart: { cart } } = this.props;

        let form = (
            <form className={Classes.Form}>
                <Input value={firstName} onChange={this.handleChange} label="First Name" type="text" name="firstName" placeholder="First Name"/>
                <Input value={lastName} onChange={this.handleChange} label="Last Name" type="text" name="lastName" placeholder="Last Name"/>
                <Input value={email} onChange={this.handleChange} error={errors.email} label="E-Mail" type="email" name="email" placeholder="E-Mail"/>
                <Input value={address} onChange={this.handleChange} label="Address" type="text" name="address" placeholder="Address"/>

                <button className={Classes.Button} onClick={this.submit} disabled={!formIsValid}> Submit </button>
            </form>
        );

        let total = 0;

        cart.forEach(({ id, count }) => {
            const miniTotal = parseInt(hotels[id].price) * parseInt(count);
            total += miniTotal;
        });

        if (submitted) {
            form = (
                <div className={Classes.Form}>
                    <h1> Resume </h1>
                    <table>
                    <thead>
                        <tr>
                            <th colSpan="2">Personnal Informations </th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>First Name:</td>
                                <td>{firstName}</td>
                            </tr>
                            <tr>
                                <td>Last Name:</td>
                                <td>{lastName}</td>
                            </tr>
                            <tr>
                                <td>E-Mail:</td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>{address}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        {cart.map(({ id, count }) => (
                            <div key={id} className={Classes.Item}>
                                <div className={Classes.Aside}>
                                    <img className={Classes.Mini} src={hotels[id].path} alt={hotels[id].name} height="50" width="50" />
                                </div>
                                <div>
                                    <p> {count} x {hotels[id].price}€ </p>
                                </div>
                            </div>
                        ))}
                        <div className={Classes.AmountWrapper}>
                            <p className={Classes.Amount}>
                                <span style={{ fontSize: '0.7em' }}> TOTAL </span>
                                <span>
                                    {total}€
                                </span>
                            </p>
                        </div>
                        <button onClick={() => this.setState({ confirmed: true })} className={Classes.Button} > Confirm </button>
                    </div>
                </div>
            );
        } 
        if (confirmed) {    
            form = <p className={Classes.Form}> Enjoy ;) </p>
        }

        return (
            <Layout>
                {form}
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    hotels: state.hotels.hotels,
    cart: state.cart
});

export default connect(mapStateToProps)(checkout);
