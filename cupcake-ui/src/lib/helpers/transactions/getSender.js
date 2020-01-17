const axios = require('../../axios');

const getSender = id => axios
  .get(`/transactions/${id}/sender`, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getSender;
