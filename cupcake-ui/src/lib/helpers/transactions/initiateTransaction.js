const axios = require('../../axios');

const initiateTransaction = data => axios
  .post(`/transactions`, data, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = initiateTransaction;
