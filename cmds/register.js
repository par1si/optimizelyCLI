const fs = require("fs");
require('dotenv').config()

module.exports = (args) => {
    const apiKey = args.a

    fs.writeFile(".env", `OPTLY_API_KEY="${apiKey}"`, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Optimizely API Key Registered");
    }); 
} 