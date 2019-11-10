const https = require('https');
const urllib = require('url');
const zlib = require('zlib');
var cache = require("./cache");
var request = {
    useCache:false,
    cache: cache,
    ajax: function(type,url,data,headers){
        return new Promise((resolv,reject) =>{
            const endpoint              = urllib.parse(url);
            headers['User-Agent']       = 'Happi SDK/1.0.0',
            headers['Host']             = endpoint.hostname,
            headers['Accept']           = "*/*",
            headers['Accept-Encoding']  = "gzip, deflate",
            headers['cache-control']    = "no-cache",
            type = type.toUpperCase();
            data = JSON.stringify(data);
            let keyCache = url + JSON.stringify(headers);
            if (type == 'GET' && request.useCache) {
                console.log("[HAPPI.DEV SDK] Using Cache");
                let c = cache.get(keyCache);
                if (c) {
                    return resolv(JSON.parse(c));
                }
            }


            var options = {
                hostname: endpoint.hostname,
                port: 443,
                path: endpoint.path,
                method: type,
                headers: headers,
                
                
            }
            var gunzip = zlib.createGunzip();   
            var req = https.get(options, (resp) => {
                let data = '';
                    
                resp.pipe(gunzip);

                gunzip.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                gunzip.on('end', () => {
                    let json = JSON.parse(data);
                    if (!json.success){
                        console.log("[HAPPI.DEV SDK]",json.error);
                    }
                    if (type == 'GET' && json.success && request.useCache){
                        console.log("[HAPPI.DEV SDK] Saving in Cache");
                        cache.set(keyCache, JSON.stringify({
                            statusCode: resp.statusCode,
                            headers: resp.headers,
                            response: json
                        }));
                    }
                    
                    return resolv({
                        statusCode: resp.statusCode,
                        headers: resp.headers,
                        response: json
                    });
                });

            });

            gunzip.on("error", (err) => {
                return reject({success: false, error: err});
            });
            if(['POST'].includes(type)){
                req.write(data)
            }
            
            
        });
    }
}
module.exports = request;