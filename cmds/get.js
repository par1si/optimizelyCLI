const optimizelyAPI = require('../utils/optimizelyAPI');
const print = require('../utils/print');

module.exports = async (args) => {
    const method = 'get'
    let endpoint

    // these conditionals define the API call made to Optimizely's REST API
    if (args.g === "projects") {
        endpoint = "projects"
        params = undefined
    } else if (args.g === "experiments") {
        endpoint = `experiments`
        params = {
            project_id: args.pid
        }
    } else if (args.g === "results") {
        experimentId = args.eid
        endpoint = `experiments/${experimentId}/results`
        params = undefined
    }

    // Here's how you would add params for a project ID (for like experiments)
    // let params = args.id
    // Sample command: optimizelyCLI -g experiments -id 8392480986
    // should return experiments running in the project ID 8392480986 as long as we pass in ?project_id=8392480986 
    // at the end of the URL

    let results = await optimizelyAPI(`${endpoint}`, method, params)
    print(results, endpoint, method, null);
} 

// Sample command: optimizelyCLI -g "projects"
