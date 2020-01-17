const axios = require('axios');
const reqs = require('../../../reqs');

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
    body['data']['relationships']['initial-account']['data']['id'] = "b5e2d34c-8bd9-469b-afbe-a924dcffe637";
    body['data']['relationships']['file-type']['data']['id'] = fileType;

    console.log(process.env);
    const instance = axios.create({
        baseURL: ''
      });
    return reqs.post(`/files`, body)
    .then(res => res.data.data)
    .catch(error => console.log(error))};

module.exports = createFile;
