const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');


yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note tittle',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note tittle',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
       notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List a  note',
    handler: function () {
        console.log('Listing  a  note!  ')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a  note',
    handler: function () {
        console.log('Reading a note!  ')
    }
})

yargs.parse();