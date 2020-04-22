const optimizelyAPI = require('../utils/optimizelyAPI');

module.exports = async (args) => {
    // This is not complete yet!!

    // Use project ID 17960060258

    let endpoint = `experiments`
    params = {
        project_id: args.pid
    };

    let results = await optimizelyAPI(`${endpoint}`, 'get', params);

    // This is where I'd add filtering to only return experiment ids that were active.
    
    getExperimentIdArray = () => {
        let arr = [];
        for (i = 0; i < results.data.length; i++) {
            arr.push(results.data[i].id)
        }
        return arr
    };
    
    const experimentIdArray = getExperimentIdArray();

    console.log(`\nMaking a request to the ${endpoint} endpoint with the following experiment id array: [${experimentIdArray}]\n`)

    getExperimentArrayResults = async () => {
        let arr = [];
        params = undefined
        for (i = 0; i < experimentIdArray.length; i++) {
            endpoint = `experiments/${experimentIdArray[i]}/results`
            let value = await optimizelyAPI(`${endpoint}`, 'get', params)
            if (value.data.metrics != undefined) {
                arr.push(value.data.metrics);
            }
        }
        return arr
    }

    let resultArray = await getExperimentArrayResults();

    printResults = (arr, arr2) => {
        for (i = 0; i < arr.length; i++) {
            console.log(`\nExperiment ID ${arr2[i]} - event name '${resultArray[i][0].name}' results:`)
            let obj = resultArray[i][0].results
            for (let [key, value] of Object.entries(obj)) {
                if (value.is_baseline === true) {
                    console.log(`\n  In the variation '${value.name}', '${resultArray[i][0].name}' is the baseline.`)
                } else {
                    console.log(`  In the variation '${value.name}', '${resultArray[i][0].name}' is at ${value.lift.significance.toFixed(2) * 100}% statistical significance.`)
                }
              }
        }
    }

    printResults(resultArray, experimentIdArray);
    

    
}

