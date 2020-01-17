const axios = require('../../axios');

const bulkFilesOfType = data => axios
  .post(`/transactions`, data, {})
  .then(res => res)
  .catch(error => console.log(error));

module.exports = bulkFilesOfType;
