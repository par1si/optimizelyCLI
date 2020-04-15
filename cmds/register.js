const fs = require("fs");
require('dotenv').config()

module.exports = (args) => {
    const apiKey = args._[1]

    // This only creates a file - if a .env file already exists, this will not update it.
    fs.writeFile(".env", `OPTLY_API_KEY="${apiKey}"`, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`Optimizely API Key registered with the value ${apiKey}.`);
    }); 
} 