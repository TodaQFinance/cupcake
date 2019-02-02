// API interfacing for our cupcake application
var apiURL = "https://api.todaqfinance.net";
var apiKey = 'd5780899-dbb8-4c71-a12b-9de54ea0227d';

var request = require('request-promise');
var sampleData = require('./data.js');
var apiRequests = require('./requests.js');
var cupcakeProps = require('./cupcake_properties.js');

function apiRequest (method, endpoint, body) {
	// FIXME accept different result function
	return request(
		{ 
			headers: {
				'Content-Type': 'application/json',
				'x-api-key' : apiKey
			},
			json: true,
			body: body,
			method,
			uri: apiURL + endpoint
		}, 
		function (error, response, body) {
			// For now, simply prints out the response of making this GET request.
			if (!error) {
				//console.log('Done!');
				//console.log(response.headers);
				//console.log(response.body);
				//console.log(response.statusCode); 
			} })
}

function apiGetRequest(endpoint) {
	return apiRequest('GET', endpoint);
}

function apiPostRequest(endpoint, body) {
	return apiRequest('POST', endpoint, body);
}

var newAccountRequest = apiRequests.createIndividualAccountRequest(sampleData.sampleAccount);
//apiPostRequest('/accounts', newAccountRequest);

var ourAccountId = '4e0ed006-4fe0-46e3-9a05-c928640a4e05';
var ourFirstCupcake = sampleData.sampleCupcake // we're pretty uninspired for now
var fileCreationRequest = apiRequests.createFileRequest(
	null,
	'cupcake', // let's specify this is a cupcake file
	ourAccountId,
	ourFirstCupcake
);

//console.log(fileCreationRequest);

//apiPostRequest('/files', fileCreationRequest);
//apiGetRequest('/files');
apiGetRequest('/transactions/' + '526adc0a-6d31-4022-bf8b-7e455308201f');

//console.log(fileCreationRequest.data["relationships"]["initial-account"]);

// --------
module.exports = { apiGetRequest, apiPostRequest };

