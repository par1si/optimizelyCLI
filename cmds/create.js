const optimizelyAPI = require('../utils/optimizelyAPI');
const projectsJSON = require('../json/projects');

module.exports = (args) => {
    let endpoint

    // Parser when endpoint is entered incorrectly.
    if (args.c === "project" || "p" || "projects") {
        endpoint = "projects"
    }

    const data = projectsJSON(args)
    var string = JSON.stringify(data);

    optimizelyAPI(`${endpoint}`, 'post', string)
} 

// Sample command: optimizelyCLI -c "projects" -n "New Project"