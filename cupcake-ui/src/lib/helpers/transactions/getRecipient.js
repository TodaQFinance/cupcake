const axios = require('../../axios');

const getRecipient = id => axios
  .get(`/transactions/${id}/recipient`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getRecipient;
