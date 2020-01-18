const axios = require('../../axios');

const requestBody = {
    data: {
        type: "file",
        attributes: {
            payload: {}
        },
        relationships: {
            "initial-account": {
                data: {
                    type: "account",
                    id: ""
                }
            },
            "file-type": {
                data: {
                    id: ""
                }
            }
        }
    }
};

const createFile = (payload, initialAccount, fileType) => {
    
    // (1/2) Update the relevant fields of body with the arguments above
    let body = requestBody;

    // (2/2) Replace FIXME below with the appropriate API path
    let path = '';

    return axios.post(path, body, {})
        .then(res => res.data.data)
        .catch(error => console.log(error))
};

module.exports = createFile;
