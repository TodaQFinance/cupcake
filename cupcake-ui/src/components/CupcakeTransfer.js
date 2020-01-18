import React, { Component } from 'react';
import '../shared/styles/CupcakeTransfer.css';
import 'request-promise';

import AccountPanel from './AccountPanel';
import initiateTransaction from '../lib/helpers/transactions/initiateTransaction';

import getFilesByAccount from '../lib/helpers/accounts/getFilesByAccount'
import { objectExpression } from '@babel/types';

class CupcakeTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftAccount: this.props.left && this.props.left.account,
      rightAccount: this.props.right && this.props.right.account,
      selectedAccount: -1,
      selectedCupcake: null,
      left: this.props.left,
      right: this.props.right,
    };
  }
  onLoad = (side, account) => {
    getFilesByAccount(account).then(data => {
      const cupcakes_from_server = data.map(x => {return {... x.attributes.payload, id:x.id}});
      this.setState(state => (state[side].cupcakes = cupcakes_from_server, state));
    });
  };

  onCupcakeSelect = (account, cupcake) => {
    // alert(JSON.stringify(cupcake));

    this.setState({
      selectedAccount: account,
      selectedCupcake: cupcake
    });

    if (this.props.onCupcakeSelect) { this.props.onCupcakeSelect(cupcake); }
  };

  onTransfer = (fromAccount, toAccount, cupcake) => {

    // const { id } = cupcake;
    const { onTransfer } = this.props;
    console.log('tx');
    console.log(fromAccount, toAccount, cupcake);
    if (fromAccount && toAccount && cupcake) {
      initiateTransaction(fromAccount, toAccount, cupcake.id)
        .then(res => {
          if (res) {
            console.log(`transfered cupcake ${cupcake.id} from account ${fromAccount} to account ${toAccount}`)
          }
        })
        .finally(() => {
          if (onTransfer) {
            onTransfer(fromAccount, toAccount, cupcake);
          }
        });
    }
  };

  render() {
    const {
      left, right, selectedAccount, selectedCupcake, leftAccount, rightAccount,
    } = this.state;
    const leftToRight = selectedAccount === leftAccount;
    const fromAccount = leftToRight ? leftAccount : rightAccount;
    const toAccount = leftToRight ? rightAccount : leftAccount;
    return (
      <div className="row panel">
        <div className="col-md-5">
          <AccountPanel
            account={left.account}
            cupcakes={left.cupcakes}
            selected={selectedCupcake}
            onLoad={this.onLoad.bind(this, 'left')}
            onSelect={this.onCupcakeSelect.bind(this, left.account)}
          />
        </div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-secondary mb-2"
            onClick={this.onTransfer.bind(this, fromAccount, toAccount, selectedCupcake)}
          >
            {!leftToRight ? '<-' : null} Transfer {leftToRight ? '->' : null}
          </button>
        </div>
        <div className="col-md-5">
          <AccountPanel
            account={right.account}
            cupcakes={right.cupcakes}
            selected={selectedCupcake}
            onLoad={this.onLoad.bind(this, 'right')}
            onSelect={this.onCupcakeSelect.bind(this, right.account)}
          />
        </div>
      </div>
    );
  }
}

export default CupcakeTransfer;
