import fs from 'fs'
import { yarg } from './config/plugins/args.plugin';



let outputMessage = '';
const base = yarg.b;

const headerMessage = `
================================================================
                Tabla del ${base}
================================================================\n
`;

for(let i = 1; i < yarg.l + 1; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage

if(yarg.s) {
    console.log(outputMessage);
}

const outputPath = `outputs`

fs.mkdirSync(outputPath, {recursive: true})
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage)