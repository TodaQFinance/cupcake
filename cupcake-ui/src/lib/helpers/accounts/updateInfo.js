const axios = require('axios');

const updateInfo = (data, id) => axios
  .patch(`${process.env.API_URL}/accounts/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
  })
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = updateInfo;
