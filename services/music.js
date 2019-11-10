var request = require("../request");



var music = {
    api_key: false,
    endpoint: 'https://api.happi.dev/',
    path: '/music/',
    ver: 'v1',
    cache:{
        enable: function(){
            request.useCache = true;
            console.log("[HAPPI.DEV SDK] Cache: Enabled");
        },
        disable: function(){
            request.useCache = false;
            console.log("[HAPPI.DEV SDK] Cache: Disabled");
        },
        flush: function(){
            request.cache.flush();
        }
    },
    search: function(q,limit,type){
        if (!limit) limit = 20;
        if(!type) type = '';
        else type = `&type=${type}`;
        return request.ajax("GET", `${this.getEndPoint()}?q=${q}&limit=${limit}${type}`,{},this.getHeaders());
    },
    artist: function(id_artist){
        return request.ajax("GET", `${this.getEndPoint()}artists/${id_artist}`,{},this.getHeaders());
    },
    albums: function(id_artist){
        return request.ajax("GET", `${this.getEndPoint()}artists/${id_artist}/albums`,{},this.getHeaders());
    },
    tracks: function(id_artist,id_album){
        return request.ajax("GET", `${this.getEndPoint()}artists/${id_artist}/albums/${id_album}/tracks`,{},this.getHeaders());
    },
    smartPlaylist: function(id_artist,limit){
        if (!limit) limit = 25;
        limit = parseInt(limit);
        return request.ajax("GET", `${this.getEndPoint()}artists/${id_artist}/smart-playlist?limit=${limit}`,{},this.getHeaders());
    },
    lyrics: function (id_artist, id_album, id_track){
        return request.ajax("GET", `${this.getEndPoint()}artists/${id_artist}/albums/${id_album}/tracks/${id_track}/lyrics`,{},this.getHeaders());
    },
    getEndPoint: function(){
        return `${this.endpoint}${this.ver}${this.path}`;
    },
    getHeaders: function(){
        return {
            'x-happi-key': this.api_key
        }
    }
}
module.exports = music;