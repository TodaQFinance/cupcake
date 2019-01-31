// API interfacing for our cupcake application

// Node modules
request = require('request-promise');

// Cupcakes.OT custom data
sampleData = require('./data.js');
apiRequests = require('./requests.js');
cupcakeProps = require('./cupcake_properties.js');

// API data
apiURL = "https://api.todaqfinance.net";
apiKey = 'd5780899-dbb8-4c71-a12b-9de54ea0227d';

/* implement:
create-cupcake
change-sprinkles
change-candles
change-color
*/

function apiRequest (method, endpoint, body) {
	// FIXME accept different result function
	return request(
		{ 
			headers: {
				'Content-Type': 'application/json',
				'x-api-key' : apiKey
			},
			json: true,
			body: JSON.stringify(body),
			method,
			uri: apiURL + endpoint
		}, 
		function (error, response, body) {
			// For now, simply prints out the response of making this GET request.
			console.log('Done!');
			if (!error) {
				console.log(response.headers);
				console.log(response.body);
				console.log(response.statusCode); }
		})
}

function apiGetRequest(endpoint) {
	apiRequest('GET', endpoint);
}

function apiPostRequest(endpoint, body) {
	apiRequest('POST', endpoint, body);
}

// Create an account!
newAccountRequest = apiRequests.createIndividualAccountRequest(sampleData.sampleAccount);
//apiPostRequest('/accounts', newAccountRequest);

// Verify it exists now
//apiGetRequest('/accounts');

// Our account-id as specified by the response is: 
ourAccountId = 'bbc044fc-d9be-470d-9393-2005ed731b28'; 
// Let's check out our files
//apiGetRequest('/files');

// Hmm.. we don't have any. Let's fix that:

ourFirstCupcake = sampleData.sampleCupcake // we're pretty uninspired for now
fileCreationRequest = 
	apiRequests.createFileRequest(
		1, // we'll start with one cupcake -- we'll have plenty of time for greed later
		'cupcake', // let's specify this is a cupcake file
		ourAccountId, // we definitely want to specify this is OURS to begin with
		ourFirstCupcake); // use our specified cupcake parameters

//console.log(fileCreationRequest.data["relationships"]["initial-account"]);

// Looks good. Let's fire it up:

//apiPostRequest('/files', fileCreationRequest);
//apiGetRequest('/files');
//apiGetRequest('/accounts/' + ourAccountId);


