const axios = require('axios');
module.exports = axios.create({
  baseURL: 'https://api.todaqfinance.net/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '7f8683fa-29d8-49c5-acc1-02b7fd4fcd60'
  }
});
