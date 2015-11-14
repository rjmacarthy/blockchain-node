
# bitpos-node

Blockchain.info Bitcoin Wrapper For Node.js

Wesite: https://blockchain.info

API documentation : https://blockchain.info/api/json_rpc_api

## Installation

  npm install blockchain-node --save

## Usage


**Require blockchain-node**

```
  var blockchain = require('blockchain-node');
```

**Instantiate**

```
	var bc = new blockchain({
      username: 'username',
      password: 'password'
  });
```

**Example Usage**

```
	  // Get info
    bc.getInfo(function(err, info) {
        // info;
    });
```

```
  // Get balance
  bc.getBalance(function(err, balance) {
      // balance;
  });
```

## Tests

  npm test

## Contributing

Contact or fork.

Email : richardmacarthy@hotmail.com

Website : www.cryptogrind.com

## Release History

* 1.0.0 Initial release

## Issues

Contact me via e-mail