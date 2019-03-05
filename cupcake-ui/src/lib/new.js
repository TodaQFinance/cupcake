const fetch = require('node-fetch');
const apiRequests = require('./requests.js');
const sampleData = require('./data.js');
const sampleCupcake = require('./data.js');
// API data
apiURL = 'https://api.todaqfinance.net';
apiKey = 'fd0ae52b-0866-449e-8e60-d0b12525cbbc';

acct0 = 'b97ce18e-224d-4893-8523-2cc94d25456b';
fileId0 = '2e0fb9d8b791bbbcddaa5b7afcbd2ba6eaa70985737fe4bf950d57cf15a5f53c';

acct1 = '6d457f21-8159-4305-bad3-56e02ac00f3e';
fileId1 = '6fa827f260c8851b0d00cfc8e0898a025756b902a709bbdaaf1d8f489edc5df3';

// basic API interaction
function apiRequest(method, endpoint, params) {
  return fetch(apiURL + endpoint, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
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
// apiGet('/accounts').then(function(x) {
//   console.log(x);
// });

// newAccountRequest = apiRequests.createIndividualAccountRequest(
//   sampleData.sampleAccount,
// );

// let res;
// res = apiPost('/accounts', newAccountRequest).then(x => console.log(x));

// const newFilesRequest = apiRequests.createFileRequest(
//   1,
//   'cupcake',
//   acct1,
//   sampleCupcake,
// );
// apiPost('/files', newFilesRequest).then(x => console.log(x));

// const transactionId = '5a7e6c96-2c12-4187-bc6f-1d4d8da42081';

const newTransactionRequest = apiRequests.transactFileRequest(acct0, acct1, [fileId0]);

const newAccountFileRequest = apiRequests.apiGet('/accounts').then(x => console.log(x));
