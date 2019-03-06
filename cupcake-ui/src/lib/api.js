const request = require('request-promise');

function apiRequest(method, endpoint, body) {
  return request(
    {
      headers: {
        // FIXME
      },
      json: true,
      body,
      method,
      uri: process.env.API_URL + endpoint,
    },
    (error, response, body) => {
      if (!error) {
        // FIXME
      }
    },
  );
}
