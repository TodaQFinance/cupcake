const { sampleAccount } = require('./data');
const createIndividualAccount = require('./helpers/accounts/createIndividualAccount');
// const getFilesByAccount = require('./helpers/accounts/getFilesByAccount');
// const getAccountById = require('./helpers/accounts/getAccountById');

require('dotenv').config();

// Simple, repeatable pattern for hitting up the TaaS API
// Code can be run with ```npm run new```
// All TaaS endpoints can be called from a function in src/lib/helpers

createIndividualAccount(sampleAccount).then(data => console.log(data));
// getFilesByAccount(process.env.ACCOUNT_0).then(data => console.log(data));
// getAccountById(id).then(data => console.log(data));
