const axios = require('../../axios');

const createBusinessAccount = (data) => {
  axios
    .post(`/accounts`, data, {})
    .then(res => res)
    .catch(error => console.log(error));
};

module.exports = createBusinessAccount;
