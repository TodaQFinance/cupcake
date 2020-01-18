const axios = require('axios');
const cfg = require('../config');
module.exports = axios.create({
  baseURL: 'https://api.todaqfinance.net/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': cfg.apiKey
  }
});
