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
  let body = requestBody;
  body['data']['relationships']['sender']['data']['id'] = sender;
  body['data']['relationships']['recipient']['data']['id'] = recipient;
  body['data']['relationships']['files']['data'][0]['id'] = fileId;
  return axios.post('/transactions', body, {})
    .then(res => res.data.data)
    .catch(error => console.log(error));

}

module.exports = initiateTransaction;
