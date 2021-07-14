const yargs = require("yargs");
const command = process.argv[2];
const newStatus = process.argv[4];
const entry = process.argv[3];
const fs = require("fs");
// const { add, deleteItem, list, update } = require("./utils");
let movieList = [];

console.log(yargs.argv);

try {
    let tempJson = fs.readFileSync("./src/json/netflix.json");
    let tempNetflix = JSON.parse(tempJson);
    movieList.push(tempNetflix);
  } catch (error) {
    movieList = [];
  };

//   const app = () => {
//     if(command === "add") {
//        add(movieList, entry); 
//     } else if (command === "deleteItem"){
//        deleteItem(movieList, entry);
//     } else if (command === "list") {
//         list(movieList);
//     } else if (command === "update") {
//         update(movieList,newStatus)
//     }
//   }

//   app();

const add = () => {
    if(command === "add") {
        const entry = { title: yargs.argv.movie, actor: yargs.argv.actor, status: "unfinished" };
        movieList.push(entry)
        let stringMovieList = JSON.stringify(movieList.flat(1))
        fs.writeFileSync("./src/json/netflix.json", stringMovieList)
    };
};

const deleteItem = () => {
    if(command === "delete") {
        const entry = { title: yargs.argv.movie, actor: yargs.argv.actor };
        let deleteIndex;
        movieList[0].map((movie, index) => {
            if(movie.title === entry.title) {
                deleteIndex = index;
            }
        });
        movieList[0].splice(deleteIndex, 1);
        let stringMovieList = JSON.stringify(movieList.flat(1))
        fs.writeFileSync("./src/json/netflix.json", stringMovieList)
    };
};

const list = () => {
    if(command === "list"){
        console.log(movieList);
    };
};

const update = () => {
    if(command === "update"){
        const entry = { title: yargs.argv.movie, actor: yargs.argv.actor }
        target = entry
        let updateIndex;
        movieList[0].map((movies, index) => {
            if(movies.title == entry.target){
                updateIndex = index
                movieList.status = newStatus
            };
        });
        let stringMovieList = JSON.stringify(movieList)
        fs.writeFileSync("./src/json/netflix.json", stringMovieList)
        console.log(`You have set the status of ${target} to "${newStatus}".`)

    }

}

add();
deleteItem();
list();
update();


// DOCKER DATABASE

