// Data format helpers for interacting with the TODAQ API

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

function createFileRequest (quantity, fileType, initialAccountId) {
	return {
		"data": {
			"type":"file",
			"attributes": {
				"quantity": quantity
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
				"recipient": transactionPartySpec(receipientAccountId)
			},
			"files": {
				"data": fileListSpec(fileIds)
			}
		}
	}
}

