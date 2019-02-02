// API data
apiURL = "https://api.todaqfinance.net";
apiKey = 'd5780899-dbb8-4c71-a12b-9de54ea0227d';

// basic API interaction
function apiRequest (method, endpoint, params) {
	return fetch(apiURL + endpoint, {
		method: method,
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			'x-api-key': apiKey
		},
		json: true,
		body: JSON.stringify(params)
	}).then(x=>x.json());
}

function apiGet(endpoint) {
	return apiRequest("GET", endpoint);
}

function apiPost(endpoint, params) {
	return apiRequest("POST", endpoint, params);
}

// do something with accounts
apiGet('/accounts').then(function(x) {
	console.log(x);
});

/*
newAccountRequest = createIndividualAccountRequest(sampleAccount);

let res;
res = apiPost('/accounts', newAccountRequest).then(x=>console.log(x));
*/

