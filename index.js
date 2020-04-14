// Minimist is a library that parses CLI arguments.
const minimist = require('minimist');



module.exports = () => {
    const args = minimist(process.argv.slice(2))
    console.log(args)
}

// Try running the following commands from the root directory:
// sudo npm link
// optimizelyCLI hello
// optimizelyCLI --createProject "Sample Project"