const axios = require('axios');

const getTransactions = () => axios
  .get(`${process.env.API_URL}/transactions`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
  })
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getTransactions;
