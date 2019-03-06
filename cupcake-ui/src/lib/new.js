const fetch = require('node-fetch');
const apiRequests = require('./requests');
const sampleData = require('./data');
const sampleCupcake = require('./data');

// basic API interaction
function apiRequest(method, endpoint, params) {
  return fetch(process.env.API_URL + endpoint, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
    },
    json: true,
    body: JSON.stringify(params),
  }).then(x => x.json());
}

function apiGet(endpoint) {
  return apiRequest('GET', endpoint);
}

function apiPost(endpoint, params) {
  return apiRequest('POST', endpoint, params);
}

// // do something with accounts
// apiGet('/accounts').then((x) => {
//   console.log(x);
// });

// const newAccountRequest = apiRequests.createIndividualAccountRequest(sampleData.sampleAccount);

// const res = apiPost('/accounts', newAccountRequest).then(x => console.log(x));

const newFilesRequest = apiRequests.createFileRequest(
  1,
  'cupcake',
  process.env.ACCOUNT_0,
  sampleCupcake,
);
apiPost('/files', newFilesRequest).then(x => console.log(x));

// const newTransactionRequest = apiRequests.transactFileRequest(
//   process.env.ACCOUNT_0,
//   process.env.ACCOUNT_1,
//   [process.env.FILE_ID_0],
// );

// const newAccountFileRequest = apiRequests.apiGet('/accounts').then(x => console.log(x));
