const axios = require('axios')
require('dotenv').config()

module.exports = async (endpoint, method) => {
  const results = await axios({
    method: `${method}`,
    apiKey: process.env.OPTLY_API_KEY,
    url: `Optimizely REST API URL/${endpoint}` // replaced with Optimizely specific URL with ${endpoint} specified
  })

  return results
}