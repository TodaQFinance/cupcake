const axios = require('../../axios');

const listFiles = () => axios
  .get(`/files?page=1&limit=100`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = listFiles;
