// Minimist is a library that parses CLI arguments.
const minimist = require('minimist');



module.exports = () => {
    const args = minimist(process.argv.slice(2))
    const cmd = args._[0]


    switch(cmd) {
        case 'hello world':
            require('./cmds/hello_world')(args)
            break
        default:
            console.log(`"${cmd}" is not a valid command. Please check your spelling and try again.`)
            break
    }
}

// Try running the following commands from the root directory:
// sudo npm link
// optimizelyCLI "hello world"