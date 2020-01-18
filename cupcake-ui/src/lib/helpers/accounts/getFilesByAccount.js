const axios = require('../../axios');

const getFilesByAccount = id => {
  // (1/1) Replace 'FIXME' with the appropriate API path
  let path = '';
  return axios
    .get(path, {})
    .then(res => res.data.data)
    .catch(error => console.log(error));};

module.exports = getFilesByAccount;
