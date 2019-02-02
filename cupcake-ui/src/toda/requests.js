// Data format helpers for interacting with the TODAQ API
//
// For additional information, please refer to the official
// TODAQ API documentation.

// ---- Account creation ---- 

function createIndividualAccountRequest(params) {
	return {
		"type": "account",
			"data": {
				"attributes": params
			}
	}
}

// ---- File creation ---- 

function initialAccountSpec (id) {
	return {
		"data": {
			"type":"account",
			"id": id
		}
	}
}

function fileTypeSpec(fileTypeId) {
	return { 
		"data": { "id": fileTypeId }
	}
}

function createFileRequest (quantity, fileType, initialAccountId, payload) {
	return {
		"data": {
			"type":"file",
			"attributes": {
				quantity, payload
			},
			"relationships": {
				"file-type": fileTypeSpec(fileType),
				"initial-account": initialAccountSpec(initialAccountId),
			}
		}
	}
}

// ---- File transaction ---- 

function transactionPartySpec(id) {
	return {
		"data": {
			"type":"account",
			"id": id
		}
	}
}

function fileListSpec(ids) { 
	return ids.map(function(x) { 
		return {
			"type": "file",
			"id": x 
		}
	})
}

function transactFileRequest (senderAccountId, receipientAccountId, fileIds) {
	return {
		"data": {
			"relationships": {
				"sender": transactionPartySpec(senderAccountId),
				"recipient": transactionPartySpec(receipientAccountId),
				"files": {
					"data": fileListSpec(fileIds)
				}
			},
		}
	}
}

module.exports = {
	createIndividualAccountRequest,
	transactFileRequest,
	createFileRequest
}
