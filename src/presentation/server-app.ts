import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RubOptions {
    base: number;
    limit: number;
    showTable: boolean
}

export class ServerApp {


    static run({base, limit, showTable}: RubOptions) {
        console.log('Server Running');

        const table = new CreateTable().execute({base, limit})

        if(showTable)console.log(table);
        
        
    }
}