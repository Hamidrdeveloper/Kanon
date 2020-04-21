import React, {Component} from 'react';
import {Provider, createStoreHook} from 'react-redux';
import HomeScreen from '../screen/Home/home';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
const store = createStore(reducers, applyMiddleware(thunk));
export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}
