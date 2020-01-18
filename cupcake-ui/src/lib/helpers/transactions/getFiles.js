const axios = require('../../axios');

const getFiles = id => axios
  .get(`/files/${id}/files?page=1&limit=100`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getFiles;
