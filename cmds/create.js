const optimizelyAPI = require('../utils/optimizelyAPI');

module.exports = (args) => {
    const endpoint = args.c
    const data = {
        "name": args.n,
        "platform": "custom"
    }

    optimizelyAPI(`${endpoint}`, 'post', JSON.stringify(data))
} 

// Sample command: optimizelyCLI -c "projects" -n "New Project"
