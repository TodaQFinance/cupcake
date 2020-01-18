const axios = require('../../axios');

const getTransactions = id => axios
  .get(`/files/${id}/transactions?page=1&limit=100`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getTransactions;
