import { yarg } from "./config/plugins/args.plugin";



// console.log(yarg);

(async() => {
    await main();
    console.log('terminate');
    
    
})();

async function main() {
    console.log(yarg);
    const {b, base} = yarg
    
}
