// API interfacing for our cupcake application
var apiURL = "https://api.todaqfinance.net";
var apiKey = 'd5780899-dbb8-4c71-a12b-9de54ea0227d';

var request = require('request-promise');

function apiRequest (method, endpoint, body) {
	return request(
		{ 
			headers: {
				// FIXME
			},
			json: true,
			body, method,
			uri: apiURL + endpoint
		}, 
		function (error, response, body) {
			if (!error) {
				// FIXME
			} })
}

