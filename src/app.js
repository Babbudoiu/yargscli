const yargs = require("yargs");
const command = process.argv[2];
const fs = require("fs");

console.log(yargs.argv);

const add = () => {
    if(command === "add") {
        const entry = { title: yargs.argv.movie, actor: yargs.argv.actor };
        console.log(entry);
    }
}

add();