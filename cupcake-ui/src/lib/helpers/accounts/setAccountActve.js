const axios = require('../../axios');

const updateInfo = (data, id) => axios
  .patch(`/accounts/${id}`, data, {})
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = updateInfo;
