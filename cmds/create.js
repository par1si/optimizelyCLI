const optimizelyAPI = require('../utils/optimizelyAPI');

module.exports = (args) => {
    const endpoint = args.c
    const data = {
        "name": args.n
    }

    optimizelyAPI(`${endpoint}`, 'post', JSON.stringify(data))
} 

