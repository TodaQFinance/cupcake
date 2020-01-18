const axios = require('../../axios');

const getTransactions = () => axios
  .get(`/transactions`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getTransactions;
