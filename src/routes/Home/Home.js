import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';
import Layout from 'hoc/Layout/Layout';
import Cart from 'components/Cart/Cart';
import Hotels from 'components/Hotels/Hotels';

class App extends Component {
  componentDidMount () {
    const { init } = this.props;

    init();
  }

  render () {
    // this.post();
    return (
      <Layout>
        <Hotels hotels={this.props.hotels} />
        <Cart />
      </Layout>
    );
  }
}

const mapDispatchToProps = (state) => ({
  hotels: state.hotels.hotels
});

const mapStateToProps = (dispatch) => ({
  init: () => dispatch(actions.initItems()), 
});

export default connect(mapDispatchToProps, mapStateToProps)(App);