## Status: Developing (unstable)
### Don't use it in production yet

# Happi.dev SDK
Simple, robust Happi.dev API client


## Table of Contents
1. [Installation](#installation)
2. [Modules](#modules)
    1. [Music](#music)
        1. [Methods](#methods)
            1. [Search](#search)
            2. [Artist](#artist)
            3. [Albums](#albums)
            4. [Tracks](#tracks)
            5. [Smart Playlist](#smartplaylist)
            6. [Lyrics](#lyrics)
    2. [Usage](#usage)
4. [Cache](#cache)

## Installation
```bash
npm install https://github.com/jodacame/happi-dev-sdk.git --save
```


## Modules
Happi bring new value to your company by driving innovation in many ways. Since APIs are being utilized every day.

## Music
It provides free api to discover millions song, artist, albums, covers and lyrics

### Methods


#### Search
Search artist or tracks 

search(query, limit, type[artist|tracks, default:track])

#### Artist
Get artist information

artist(id_artist)

#### Albums
Get albums from artist 

albums(id_artist)

#### Tracks
Get tracks from album 

tracks(id_artist, id_album)

#### SmartPlaylist
 Generate smart playlist using artist seed 

smartPlaylist(id_artist, limit)

#### Lyrics
Get track lyrics 

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

