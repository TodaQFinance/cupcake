const axios = require('../../axios');

const createIndividualAccount = data => axios
  .post(`/accounts`, data, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = createIndividualAccount;
