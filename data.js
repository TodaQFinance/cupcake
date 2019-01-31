// Cupcake sample data

sampleAccount = 
	{
		"account-type": "individual",
		"admin-email": "cupcake_maniac_99@hotmail.com",
		"contact": {
			"email": "cupcake_maniac_99@hotmail.com",
			"phone": "555-555-5323",
			"last-name": "Rachmaninoff",
			"first-name": "Sergei",
			"address": {
				"city": "Toronto",
				"country": "CA",
				"postal-code": "N4N2L1",
				"province-region": "Ontario",
				"street-address-1": "39 Madison Avenue",
				"street-address-2": ""
			}
		}
	}

sampleCupcake =
	{ "flavour": "chocolate",
		"icing": ["vanilla","strawberry"],
		"sprinkles": [
			{
				"quantity": 42,
				"type": "rainbow"
			},
			{
				"quantity": 10,
				"type": "chocolate"
			}
		],
		"candles": [
			{ 
				"colour":"blue",
				"ignited":false
			},
			{
				"colour":"pink",
				"ignited":false
			}
		],
		"temperature": 50 
	}

module.exports = {
	sampleCupcake,
	sampleAccount
};
