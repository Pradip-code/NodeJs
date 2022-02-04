  
   const yargs = require('yargs')
//simple module working with functions 
   
  // const add = require('./demo.js')
  //   const result = add(12 ,6)
  //     console.log(result)

 //   coloring the text msg
   /*const green = Chalk.blue.inverse.red('Hello')
  console.log(green)
console.log(process.argv[2])
 */
     yargs.version('1.1.0')
  // commads for yargs 
    yargs.command({
        command:"add",
        describe:"adding the note",
        builder: {
               title:{
                  describe:'Title',
                   demandOption: true,
                   type: 'string'
               },
               body: {
                describe:'Not body',
                demandOption: true,
                type: 'string'
               }

        },
        handle: (argv) => {
            console.log("Title" + argv.title)
            console.log("body" + argv.body)
        }
    })
    //for remove
    yargs.command({
      command:"remove",
      describe:"removing the notes",
      handle: () => {
          console.log("#remove")
      }
  })
  // for Read and list

  yargs.command({
    command:"read",
    describe:"reading the notes",
    handle: () => {
        console.log("#read")
    }
})
  

    console.log(yargs.argv)