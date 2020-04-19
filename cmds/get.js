const optimizelyAPI = require('../utils/optimizelyAPI');

module.exports = (args) => {
    let endpoint

    // Parser when endpoint is entered incorrectly.
    if (args.g === "project" || "p" || "projects") {
        endpoint = "projects"
    }

    // Here's how you would add params for a project ID (for like experiments)
    // let params = args.id
    // Sample command: optimizelyCLI -g experiments -id 8392480986
    // should return experiments running in the project ID 8392480986 as long as we pass in ?project_id=8392480986 
    // at the end of the URL

    optimizelyAPI(`${endpoint}`, 'get')
} 

// Sample command: optimizelyCLI -g "projects"
