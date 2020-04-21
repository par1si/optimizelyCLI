const axios = require('axios')
const ora = require('ora');
require('dotenv').config()


const token = process.env.OPTLY_API_KEY


module.exports = async function (endpoint, method, data) {

  // Initialize spinner
  const spinner = ora().start()

  let url =`https://api.optimizely.com/v2/${endpoint}`
  let results
  try {
    if (method === 'post' || method === 'put') {
      results = await axios({
        method: method,
        url,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: data
      });

    } else if (method === 'get' || method === 'delete') {
      results = await axios({
        method: method,
        url,
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: params
      })
    };

    spinner.stop()
  } catch (err) {
    spinner.stop()
    console.error(err)
  }
  return results
}