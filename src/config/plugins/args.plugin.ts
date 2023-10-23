
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        description: 'Show the table multiplication'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        description: 'File Name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: './outputs',
        description: 'File Destination'
    })
    .check((argv, options) => {

        if(argv.b < 1) throw 'b must be greater than 0'


        return true
    })
    .parseSync()