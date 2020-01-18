const axios = require('../../axios');

const getFilesByAccount = id => {
  // (1/1) Replace 'FIXME' with the appropriate API path
  let path = `/accounts/${id}/files?page=1&limit=100`;
  return axios
    .get(path, {})
    .then(res => res.data.data)
    .catch(error => console.log(error));};

module.exports = getFilesByAccount;
