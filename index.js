// Minimist is a library that parses CLI arguments.
const minimist = require('minimist');


module.exports = async () => {

    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help'

    if (args.version || args.v) {
        cmd = 'version'
    }

    if (args.help || args.h) {
        cmd = 'help'
    }

    if (args.register || args.r) {
        cmd = 'register'
    }


    switch(cmd) {
        case 'register':
            require('./cmds/register')(args)
            break

        case 'version':
            require('./cmds/version')(args)
            break

        case 'help':
            require('./cmds/help')(args)
            break

        default:
            console.log(`"${cmd}" is not a valid command. Please check your spelling and try again.`)
            break
    }
}

// Try running the following commands from the root directory:
// sudo npm link
// optimizelyCLI "hello world"
// optimizelyCLI help
// optimizelyCLI help create
// optimizelyCLI -v
