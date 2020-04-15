const optimizelyAPI = require('../utils/optimizelyAPI');
const ora = require('ora');

module.exports = async (args) => {
    const spinner = ora().start()
  
    try {
      const endpoint = args.endpoint || args.e
      const response = await optimizelyAPI(endpoint)
  
      spinner.stop()

      console.log(response.data)
  
    } catch (err) {
      spinner.stop()
  
      console.error(err)
    }
  }