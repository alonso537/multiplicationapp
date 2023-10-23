import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";



// console.log(yarg);

(async() => {
    await main();
    // console.log('terminate');
    
    
})();

async function main() {
    // console.log(yarg);

    const {b:base, l:limit, s:showTable} = yarg;

    ServerApp.run({base, limit, showTable });
    // const {b, base} = yarg
    
}
