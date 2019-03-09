import React, { Component } from 'react';

class AccountSelector extends Component {
  state = {
    account: this.props.account,
  };

  onLoad = (evt) => {
    evt.preventDefault();

    const { onLoad } = this.props;
    const { account } = this.state;

    if (onLoad) {
      onLoad(account);
    }
  };

  render() {
    const { account } = this.state;
    return (
      <form className="form-inline">
        <div className="form-group mb-2">
          <label>Account</label>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            value={account}
            onChange={evt => this.setState({ account: evt.target.value })}
          />
        </div>
        <button type="button" className="btn btn-primary mb-2" onClick={this.onLoad}>
          Load
        </button>
      </form>
    );
  }
}

export default AccountSelector;
