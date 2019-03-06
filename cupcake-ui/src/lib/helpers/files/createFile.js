const axios = require('axios');

const createFile = data => axios
  .post(`${process.env.API_URL}/files`, data, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
  })
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = createFile;
