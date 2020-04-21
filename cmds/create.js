const optimizelyAPI = require('../utils/optimizelyAPI');
const projectsJSON = require('../json/projects');
const print = require('../utils/print');

module.exports = (args) => {
    const method = 'post'
    let endpoint

    // Parser when endpoint is entered incorrectly.
    if (args.c === "project" || "p" || "projects") {
        endpoint = "projects"
    }

    const data = projectsJSON(args)
    var string = JSON.stringify(data);

    let results = optimizelyAPI(`${endpoint}`, method, string)
    print(results, endpoint, method, string);
} 

// Sample command: optimizelyCLI -c "projects" -n "New Project"
