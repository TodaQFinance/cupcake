const axios = require('axios');

const initiateTransaction = data => axios
  .post(`${process.env.API_URL}/transactions`, data, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
  })
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = initiateTransaction;
