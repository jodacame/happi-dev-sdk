var happi = require("./index");
happi.init('API_KEY_HERE');
happi.music.search("Aerosmith Jade").then(result => {
    if (result.response.success){
        console.log(result.response);
    }
})