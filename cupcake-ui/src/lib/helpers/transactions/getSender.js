const axios = require('axios');

const getSender = id => axios
  .get(`${process.env.API_URL}/transactions/${id}/sender`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
  })
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getSender;
