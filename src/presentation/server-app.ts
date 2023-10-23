import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RubOptions {
    base: number;
    limit: number;
    showTable: boolean
}

export class ServerApp {


    static run({base, limit, showTable}: RubOptions) {
        console.log('Server Running');

        const table = new CreateTable().execute({base, limit})
        const wasSaved = new SaveFile().execute({fileContent: table})

        if(showTable)console.log(table);

        wasSaved ? console.log('file Created') : console.log('error')
        
        
    }
}