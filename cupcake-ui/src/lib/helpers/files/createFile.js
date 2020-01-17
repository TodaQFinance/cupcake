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

const createFile = (payload, owner, fileType) => {
    let body = requestBody;
    body['data']['attributes']['payload'] = payload;
    body['data']['relationships']['initial-account']['data']['id'] = owner;
    body['data']['relationships']['file-type']['data']['id'] = fileType;

    return axios.post(`/files`, body, {})
        .then(res => res.data.data)
        .catch(error => console.log(error))
};

module.exports = createFile;
