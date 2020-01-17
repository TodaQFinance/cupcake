const axios = require('../../axios');

const createFile = data => axios
  .post(`/files`, data, {})
  .then(res => res)
  .catch(error => console.log(error));

module.exports = createFile;
