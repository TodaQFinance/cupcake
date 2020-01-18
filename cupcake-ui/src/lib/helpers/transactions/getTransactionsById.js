const axios = require('../../axios');

const getTransactionsById = id => axios
  .get(`/transactions/${id}`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getTransactionsById;
