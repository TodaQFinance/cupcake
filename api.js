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
// newAccountRequest = apiRequests.createIndividualAccountRequest(sampleData.sampleAccount);
// apiPostRequest('/accounts', newAccountRequest);

// Verify it exists now
apiGetRequest('/accounts');

