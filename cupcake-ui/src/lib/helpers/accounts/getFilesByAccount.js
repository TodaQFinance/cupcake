const axios = require('../../axios');

const getFilesByAccount = id => axios
  .get(`/accounts/${id}/files?page=1&limit=100`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getFilesByAccount;
