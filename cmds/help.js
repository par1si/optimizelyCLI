const menus = {
    main: `
    optimizelyCLI [command] <options>

    version or -v ................... prints the local version of the app to the console.
    help or -h ...................... displays the help menu.
    [command] help .................. displays the help menu for that command.
    register "API KEY"............... saves your API key to a local file for use in future API calls.
    `,
    create: `
    optimizelyCLI create [endpoint] <options>

    -c "endpoint" ................... makes a "post" request to the specified endpoint.
    `
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[2]

    console.log(menus[subCmd] || menus.main)
}