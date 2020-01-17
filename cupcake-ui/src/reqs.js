const axios = require('axios');

const reqs = axios.create({
    baseURL: 'https://api.staging.todaqfinance.net',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': "1234" // process.env.API_KEY,
    }
  });

  module.exports = reqs;