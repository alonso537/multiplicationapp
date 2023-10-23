import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RubOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    dest: string;
}

export class ServerApp {


    static run({base, limit, showTable, name, dest}: RubOptions) {
        console.log('Server Running');

        const table = new CreateTable().execute({base, limit})
        const wasSaved = new SaveFile().execute({fileContent: table, destination: dest, fuleName: name})

        if(showTable)console.log(table);

        wasSaved ? console.log('file Created') : console.log('error')
        
        
    }
}