## Status: Developing (Not stable yet)
### Don't use it in production yet

# Happi.dev SDK
Simple, robust Happi.dev API client

## Installation
```bash
npm install https://github.com/jodacame/happi-dev-sdk.git --save
```

## Methods
### Music



**Search:** ***Search artist or tracks*** 

search(query, limit, type[artist|tracks, default:track])

**Artist:** ***Get artist information***

artist(id_artist)

**Albums:** ***Get albums from artist*** 

artist(id_artist)

**Tracks:** ***Get tracks from album*** 

tracks(id_artist, id_album)

**Smart Playlist:** ***Generate smart playlist using artist seed*** 

smartPlaylist(id_artist, limit)

**Lyrics:** ***Get track lyrics*** 

lyrics(id_artist, id_album, id_track)

### Usage

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

