const axios = require('../../axios');

const getTransactionsByAccount = id => axios
  .get(`/accounts/${id}/transactions?page=1&limit=100`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getTransactionsByAccount;
