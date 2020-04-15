const menus = {
    main: `
    optimizelyCLI [command] <options>

    hello world ..................... log "Hello World" to the console.
    `,
    create: `
    optimizelyCLI create [command] <options>

    createFeature ................... creates a new Optimizely feature for the specified project option.
    `
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[2]

    console.log(menus[subCmd] || menus.main)
}