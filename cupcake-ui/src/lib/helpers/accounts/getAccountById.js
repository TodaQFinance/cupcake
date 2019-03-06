const axios = require('axios');

const getAccountById = id => axios
  .get(`${process.env.API_URL}/accounts/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
  })
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getAccountById;
