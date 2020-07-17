## Important
***Status:*** unstable
***Don't use it in production yet***

# Happi.dev SDK
Simple, robust Happi.dev API client


## Table of Contents
1. [Installation](#installation)
2. [Modules](#modules)
    * [Music](#music)
        * [Methods](#methods)
            * [Search](#search)
            * [Artist](#artist)
            * [Albums](#albums)
            * [Tracks](#tracks)
            * [Smart Playlist](#smartplaylist)
            * [Smart Playlist by Tempo (BPM)](#smartplaylistbpm)
            * [Acrostic Playlist](#acrosticplaylist)
            * [Lyrics](#lyrics)
    * [Usage](#usage)
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
```javascript
search(query, limit, type[artist|tracks, default:track])
````
#### Artist
Get artist information
```javascript
artist(id_artist)
```
#### Albums
Get albums from artist 
```javascript
albums(id_artist)
```
#### Tracks
Get tracks from album 
```javascript
tracks(id_artist, id_album)
```
#### SmartPlaylist
Generate smart playlist using artist seed 
```javascript
smartPlaylist(id_artist, limit)
```
#### smartPlaylistByBPM
Generate smart playlist using bpm range
```javascript
smartPlaylistByBPM(bpm, limit,genres)
```
##### Examples
```javascript
smartPlaylistByBPM(100, 50); // Get smart playlist tempo 100
smartPlaylistByBPM('80-100', 50, 'rock'); // Get smart playlist tempo between 80 and 100 with rock genre
```
#### AcrosticPlaylist
Generate a acrostic playlist using artist seed and first track letter
```javascript
acrostic(id_artist, message[Max 100 Charactes])
```
#### Lyrics
Get track lyrics 
```javascript
lyrics(id_artist, id_album, id_track)
```
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

## Cache
Ensable or disable cache
```javascript
// Enable
happi.cache.on();
// Disable
happi.cache.off();
```


## TODO
* Redis cache
* Documentation
* API: Exchange Rate
* API: IP Address
* API: Key/Value store 
* API: Password Generator
* API: QR Code

