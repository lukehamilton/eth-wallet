// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {

  constructor(props)  {
    super(props)
  }

  generateAddress() {
    console.log("Generating address")
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Ether Wallet</h2>
          {/* <Link to="/counter">to Counter</Link> */}
          <a onClick={this.generateAddress}>Generate New Address</a>
        </div>
      </div>
    );
  }
}
