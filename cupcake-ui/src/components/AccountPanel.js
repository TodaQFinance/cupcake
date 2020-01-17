import classnames from 'classnames';
import React, { Component } from 'react';

import '../shared/styles/CupcakeTransfer.css';

import AccountSelector from './AccountSelector';

class AccountPanel extends Component {
  constructor (props) {
    super (props);
  }
  
  render() {
    const {account, cupcakes, onSelect, onLoad, selected} = this.props;
    return (
      <div>
        <AccountSelector account={account} onLoad={onLoad} />
        <div>
          {cupcakes.map((c) => {
            console.log(c);
            const className = classnames('cupcake-row', {
              "cupcake-row-selected": c.id == (selected && selected.id),
            });
    
            return (
              <div className={className} key={c.id} onClick={evt => onSelect(c)}>
                {c.id}
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

// const AccountPanel = ({
//   account, cupcakes, onSelect, onLoad, selected,
// }) => (
//   <div>
//     <AccountSelector account={account} onLoad={onLoad} />
//     <div>
//       {cupcakes.map((c) => {
//         console.log(c);
//         const className = classnames('cupcake-row', {
//           "cupcake-row-selected": c.id == (selected && selected.id),
//         });

//         return (
//           <div className={className} key={c.id} onClick={evt => onSelect(c)}>
//             {c.id}
//           </div>
//         );
//       })}
//     </div>
//   </div>
// );

export default AccountPanel;
