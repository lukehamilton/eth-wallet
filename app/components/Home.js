// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Web3 from 'web3';

export default class Home extends Component {

  constructor(props)  {
    super(props)
    this.state = {
      web3: new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    }
  }

  generateAddress() {
    console.log("Generating address")
    console.log('Web 3', Web3);
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Ether Wallet</h2>
          {/* <Link to="/counter">to Counter</Link> */}
          <a onClick={this.generateAddress}>Generate New Address</a>
          <h4>Accounts on Test Net</h4>
          { this.state.web3.eth.accounts.map(account =>{
            return (
              <div>{ account }</div>
            )
          })}
        </div>
      </div>
    );
  }
}
