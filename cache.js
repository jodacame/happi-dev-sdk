var crypto = require('crypto');


var cache = {
    data:{},
    set:function(key,data){
        cache.data[cache.getHash(key)] = data;
    },
    get:function(key){
        return cache.data[cache.getHash(key)] ? cache.data[cache.getHash(key)] : false
    },
    getHash: function(key){
        return crypto.createHash('sha1').update(key).digest('hex');
    },
    flush: function(){
        cache.data = {};
    }
}
module.exports = cache;