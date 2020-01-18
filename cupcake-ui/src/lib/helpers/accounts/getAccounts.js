const axios = require('../../axios');

const getAccounts = () => axios
  .get(`/accounts?filter[active]=true&page=1&limit=100`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getAccounts;
