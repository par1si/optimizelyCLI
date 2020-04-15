const axios = require('axios')
require('dotenv').config()


module.exports = async function (endpoint, method, data) {
  let url =`https://api.optimizely.com/v2/${endpoint}`
  const results = await axios({
    method: method,
    url,
    headers: {
      Authorization: `Bearer ${process.env.OPTLY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    data: data
  })
  return results
}