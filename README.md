# Mmmm, digital cupcakes

## Install instructions

Note: you'll need npm and node to run this demo. You can install them from here: https://nodejs.org/en/

First, clone the repo.

`git clone git@github.com:PrivacyShell/cupcake.git cupcake`

Install dependencies.

`npm install`

Get an api key.

`https://engineering.todaq.net/api.html`

Update `apiKey` in config file.

`cupcake-ui/src/config.js`

Create a user by running:

`npm run new`

You should see output similar to this:
```js
[ { type: 'account',
    id: 'f0ca4d9a-44b2-4f06-afd5-bdb99094bf37',
    attributes: 
     { contact: [Object],
       'is-active': true,
       'admin-email': 'peter.wiggen@example.com',
       'account-type': 'individual',
       'enterprise-id': '5b8893a1-bcbe-4cff-ba4d-20d5e944d395' },
    links: 
     { self: 'http://api.todaqfinance.net/accounts/f0ca4d9a-44b2-4f06-afd5-bdb99094bf37' },
    meta: { 'last-modified': null } },
  { type: 'change',
    id: 'b34a15fc-c3d7-482d-86ab-c82acef65a1f',
    meta: { 'last-modified': null } } ]
```

Copy the first `id` value into `account.left` in `cupcake-ui/src/config.js`

Create another account with `npm run new`

Copy the account id into `accounts.right`

Start the app.

`npm run start`

This will compile and start the app on `http//:localhost:3000`