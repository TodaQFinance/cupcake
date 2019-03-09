const axios = require('axios');

const getAccounts = () => axios
  .get(`${process.env.API_URL}/accounts?filter[active]=true&page=1&limit=100`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
  })
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getAccounts;
