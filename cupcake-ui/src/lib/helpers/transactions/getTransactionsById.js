const axios = require('axios');

const getTransactionsById = id => axios
  .get(`${process.env.API_URL}/transactions/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
  })
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getTransactionsById;
