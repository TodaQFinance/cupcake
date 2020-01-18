const axios = require('../../axios');

const requestBody = {
  data: {
    attributes: {
      metadata: {}
    },
    relationships: {
      sender: {
        data: {
          type: 'account',
          id: ''
        }
      },
      recipient: {
        data: {
          type: 'account',
          id: ''
        }
      },
      files: {
        data: [{
          type: 'file',
          id: ''
        }]
      }
    }
  }
}

const initiateTransaction = (sender, recipient, fileId) => {
  // (1/2) Update the relevant fields of body with the arguments above
  let body = requestBody;

  // (2/2) Replace FIXME below with the appropriate API path
  let path = '';
  return axios.post(path, body, {})
    .then(res => res.data.data)
    .catch(error => console.log(error));

}

module.exports = initiateTransaction;
