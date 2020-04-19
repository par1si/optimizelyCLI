const menus = {
    main: `
    optimizelyCLI [command] <options>

    version or -v ................... prints the local version of the app to the console.
    help or -h ...................... displays the help menu.
    [command] help .................. displays the help menu for that command.
    register "Personal API Token".... saves your API token to a local file for use in future API calls.
    `,
    create: `
    optimizelyCLI create [endpoint] <options>

    -c || create "endpoint" ................... makes a "post" request to the specified endpoint.
    -c "projects" [args] ...................... creates a new Full Stack project with the associated SDK.

    create "projects" command line arguments  -----------------------------------------------------------
    -ct ....................................... sets the confidence threshold for the project. [0 - 1.0].
    -d ........................................ sets the descriptions for the project.
    -n (required) ............................. sets the name for the project.
    -s ........................................ sets the status for the project (e.g. "active").
    -tpp ...................................... sets the third-party-platform for the project.
   
    example command:
    
    optimizelyCLI -c "projects" -ct "0.9" -d "My first project!" -n "Hello world!" -s "Active" -tpp "Salesforce"

    `,

    get: `
    optimizely CLI get [endpoint] <options>
    
    example commands:

    optimizelyCLI -g projects
    optimizelyCLI -g p
    
    `
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[2]

    console.log(menus[subCmd] || menus.main)
}