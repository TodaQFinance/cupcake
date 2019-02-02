import React, { Component } from 'react';
import classnames from 'classnames';
import './CupcakeTransfer.css'
import 'request-promise';

import * as toda from './toda/api.js';
import * as apiRequests from './toda/requests.js';

class AccountSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: props.account,
    };
  }

  onLoad = evt => {
    evt.preventDefault();
    if(this.props.onLoad) {
      this.props.onLoad(this.state.account);
    }
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group mb-2">
          <label>Account</label>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <input 
            type="text" 
            className="form-control" 
            value={this.state.account} 
            onChange={evt => this.setState({account: evt.target.value})} />
        </div>
        <button type="button" className="btn btn-primary mb-2" onClick={this.onLoad}>Load</button>
      </form>
    );
  }
}

class AccountPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {account, cupcakes, onSelect, onLoad, selected} = this.props;

    return (
      <div>
        <AccountSelector account={account} onLoad={onLoad} />
        <div>
          {cupcakes.map(c => {
						console.log(c);
            const className = classnames("cupcake-row", {
              //"cupcake-row-selected": c.id == (selected && selected.id),
            });

						return (
							<div 
							className={className} 
							key={c.id} 
							onClick={evt => onSelect(c)}>
							{c.id}
							</div>
						);
          })}
        </div>
      </div>
    );
  }
}

class CupcakeTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftAccount: props.left && props.left.account,
      rightAccount: props.right && props.right.account,
      selectedAccount: -1,
      selectedCupcake: null,
      left: props.left,
      right: props.right,
    };
  }

  onLoad = (side, account) => {
		var that = this;
		toda.apiGetRequest('/accounts/' + account + "/files")
		  .catch(function(e) {
				console.log(e);
			})
			.then(function(filesData) {
				if (filesData.meta['total-results'] > 0) {
					//console.log(filesData.data)

					if(side === "left") {
						that.setState({
							leftAccount: account, 
							left: { cupcakes: [filesData.data], account: account }});
					} 
					else if(side === "right") {
						console.log(filesData);
						that.setState({
							rightAccount: account,
							right: { cupcakes: [filesData.data], account: account }});
						console.log(that.state);
					}
				}
			}
			);
	}

	onCupcakeSelect = (account, cupcake) => {
		alert(JSON.stringify(cupcake));
		console.log(account);

    this.setState({ 
      selectedAccount: account,
      selectedCupcake: cupcake,
    });

		console.log(this.state);

    //if(this.props.onCupcakeSelect) { this.props.onCupcakeSelect(cupcake); }
  }

  onTransfer = (fromAccount, toAccount, cupcake) => { 
		console.log('tx')
		console.log(fromAccount, toAccount, cupcake)
		if (fromAccount && toAccount && cupcake) {
			// api
			let id = cupcake.id;
			let request = apiRequests.transactFileRequest(fromAccount,toAccount,[id]);
			console.log('=====');
			console.log(request);
			toda.apiPostRequest('/transactions', request)
				.catch(function(e) {
					console.log(e);
				})
				.then(function(res) {
					console.log(res);
				});

			// base
			if(this.props.onTransfer) {
				this.props.onTransfer(fromAccount, toAccount, cupcake);
			}}
  }

  render() {
    const {left, right, selectedAccount, selectedCupcake, leftAccount, rightAccount} = this.state;
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
            onSelect={this.onCupcakeSelect.bind(this, left.account)} />
        </div>
        <div className="col-md-2">
          
            <button type="button" className="btn btn-secondary mb-2"
              onClick={this.onTransfer.bind(this, fromAccount, toAccount, selectedCupcake)}>
              {!leftToRight ? "<-" : null} Transfer {leftToRight ? "->" : null}
            </button>
          
        </div>
        <div className="col-md-5">
          <AccountPanel 
            account={right.account} 
            cupcakes={right.cupcakes} 
            selected={selectedCupcake}
            onLoad={this.onLoad.bind(this, 'right')}
            onSelect={this.onCupcakeSelect.bind(this, right.account)} />
        </div>
      </div>
    );
  }
}

export default CupcakeTransfer;
