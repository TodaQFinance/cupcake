import React from 'react';
import ReactDOM from 'react-dom';

import './shared/styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
