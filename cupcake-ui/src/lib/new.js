const { sampleAccount } = require('./data');
const createIndividualAccount = require('./helpers/accounts/createIndividualAccount');
// const getAccounts = require('./helpers/accounts/getAccounts');
// const getAccountById = require('./helpers/accounts/getAccountById');

require('dotenv').config();

// Simple, repeatable pattern for hitting up the TaaS API
// Code can be run with ```npm run new```
// All TaaS endpoints can be called from a function in src/lib/helpers

// getAccounts().then(data => console.log(data));
// getAccountById(id).then(data => console.log(data));
createIndividualAccount(sampleAccount).then(data => console.log(data));
