const optimizelyAPI = require('../utils/optimizelyAPI');
const projectsJSON = require('../json/projects');

module.exports = (args) => {
    // I'm thinking of implementing a switch/case statement here for args.c variable

    const endpoint = args.c
    const data = projectsJSON(args)

    var string = JSON.stringify(data);

    optimizelyAPI(`${endpoint}`, 'post', string)
} 

// Sample command: optimizelyCLI -c "projects" -n "New Project"
