const axios = require('../../axios');

const getProofs = id => axios
  .get(`/files/${id}/proofs?page=1&limit=100`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getProofs;
