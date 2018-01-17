import React, { Component } from 'react';
import { connect } from 'react-redux'
import { muneebInfo, hanzalaInfo } from '../actions/action1';
import ProductList from './Products';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ProductList />
      </div>
    )
  }
}






