const optimizelyAPI = require('../utils/optimizelyAPI');

module.exports = (args) => {
    let endpoint

    // Parser when endpoint is entered incorrectly.
    if (args.c === "project" || "p" || "projects") {
        endpoint = "projects"
    }

    optimizelyAPI(`${endpoint}`, 'get', undefined)
} 

// Sample command: optimizelyCLI -g "projects"
