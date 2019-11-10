# Happi.dev SDK
Simple, robust Happi.dev API client

## Installation
```bash
npm install happi-dev-sdk --save
```

## Usage (Music)

More info in https://happi.dev/

```javascript
var happi = require("happi-dev-sdk");

happi.init('YOUR_API_KEY');

var query = 'Aerosmith Jade';

happi.music.search(query, 40).then(response => {
    console.log(response);
}).catch(err => {
    console.log("Error",err);
});
```

## TODO
* Redis cache
* Documentation
* API: Exchange Rate
* API: IP Address
* API: Key/Value store 
* API: Password Generator
* API: QR Code

