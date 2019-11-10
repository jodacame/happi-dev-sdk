var music = require("./services/music");

var happi = {
    init: function(key){
        music.api_key = key;
    },
    music:music
}
module.exports = happi;