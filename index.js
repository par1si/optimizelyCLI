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

    if (args.create || args.c) {
        cmd = 'create'
    }

    if (args.get || args.g) {
        cmd = 'get'
    }

    if (args.summary || args.s) {
        cmd = 'summary'
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

        case 'create':
            require('./cmds/create')(args)
            break

        case 'get':
            require('./cmds/get')(args)
            break

        case 'summary':
            require('./cmds/summary')(args)
            break

        default:
            console.log(`"${cmd}" is not a valid command. Please check your spelling and try again.`)
            break
    }
}
