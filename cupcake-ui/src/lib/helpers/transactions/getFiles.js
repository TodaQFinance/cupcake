const axios = require('axios');

const getFiles = id => axios
  .get(`${process.env.API_URL}/files/${id}/files?page=1&limit=100`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
  })
  .then(res => res.data.data)
  .catch(error => console.log(error));

module.exports = getFiles;
