const { sampleAccount, sampleCupcake } = require('./data');
const createIndividualAccount = require('./helpers/accounts/createIndividualAccount');
// const getFilesByAccount = require('./helpers/accounts/getFilesByAccount');
// const getAccountById = require('./helpers/accounts/getAccountById');
// const createFile = require('./helpers/files/createFile');

require('dotenv').config();

// Simple, repeatable pattern for hitting up the TaaS API
// Code can be run with ```npm run new```
// All TaaS endpoints can be called from a function in src/lib/helpers

createIndividualAccount(sampleAccount).then(data => console.log(data));
// getFilesByAccount(process.env.ACCOUNT_0).then(data => console.log(data));
// getAccountById(process.env.ACCOUNT_0).then(data => console.log(data));
// createFile(sampleCupcake, process.env.ACCOUNT_0, "0").then(data => console.log(data));
