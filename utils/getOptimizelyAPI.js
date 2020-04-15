const axios = require('axios')
require('dotenv').config()


module.exports = async function getData (endpoint) {
  let url =`https://api.optimizely.com/v2/${endpoint}`
  const results = await axios.get(url, { // replaced with Optimizely specific URL with ${endpoint} specified
    headers: {
      Authorization: `Bearer ${process.env.OPTLY_API_KEY}`
    }
  })
  console.log(results)
}

