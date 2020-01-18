const axios = require('../../axios');

const getAccountById = id => axios
  .get(`/accounts/${id}`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getAccountById;
