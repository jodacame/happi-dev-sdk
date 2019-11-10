var music = require("./services/music");
var request = require("./request");
var happi = {
    init: function(key){
        music.api_key = key;
        music.request = request; // Inject request
    },
    cache: {
        on: function () {
            request.useCache = true; // Enable cache
            console.log("[HAPPI.DEV SDK] Cache: Enabled");
        },
        off: function () {
            request.useCache = false; // Enable cache
            console.log("[HAPPI.DEV SDK] Cache: Disabled");
        }
    },
    music:music
}
module.exports = happi;