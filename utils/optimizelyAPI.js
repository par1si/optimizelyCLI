const axios = require('axios')

module.exports = async (endpoint) => {
  const results = await axios({
    method: 'get',
    url: `https://dog.ceo/api/breeds/image/random` // replace with Optimizely specific URL with ${endpoint} specified
  })

  return results
}