module.exports = (results, endpoint, method, data) =>  {
    let string = JSON.stringify(results.data, null, 2);


    if (method === 'post') {
        console.log(`\nMaking a ${method} request to the /${endpoint} endpoint with the following payload:\n${data}.`)
    } else if (method === 'put') {
        // do something
    } else {
        console.log(`\nMaking a ${method} request to the /${endpoint} endpoint.`)
        console.log(`\nResponse:\n
        ${string}
        `)
    }
}