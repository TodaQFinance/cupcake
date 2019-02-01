import React, { Component } from 'react';
import classnames from 'classnames';
import './CupcakeTransfer.css'

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
    
    this.state = {
      account: props.account,
      cupcakes: props.cupcakes,
    };
  }

  render() {
    const {onSelect, onLoad} = this.props;
    const {account, cupcakes} = this.state;

    return (
      <div>
        <AccountSelector account={account} onLoad={onLoad} />
        <div>
          {cupcakes.map(c => {
            return (
              <div className="cupcake-row" key={c.id} onClick={evt => onSelect(c.id)}>
                Cupcake - {c.id}
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
      left: props.left,
      right: props.right,
    };
  }

  onLoad = (side, account) => {
    console.log("On Load", side, account);
  }

  onCupcakeSelect = (account, id) => {
    this.setState({ selected: id });
  }

  render() {
    const {left, right, selected} = this.state;

    return (
      <div className="row panel">
        <div className="col-md-5">
          <AccountPanel 
            account={left.account} 
            cupcakes={left.cupcakes} 
            onLoad={this.onLoad.bind(this, 'left')}
            onSelect={this.onCupcakeSelect.bind(this, left.account)} />
        </div>
        <div className="col-md-2">
        Middle
        </div>
        <div className="col-md-5">
          <AccountPanel 
            account={right.account} 
            cupcakes={right.cupcakes} 
            onLoad={this.onLoad.bind(this, 'right')}
            onSelect={this.onCupcakeSelect.bind(this, right.account)} />
        </div>
      </div>
    );
  }
}

export default CupcakeTransfer;
