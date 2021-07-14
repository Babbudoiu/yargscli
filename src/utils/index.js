const fs = require("fs");
const entry = { title: yargs.argv.movie, actor: yargs.argv.actor };

exports.add = (movieList) => {
    tempMovie = entry;
    movieList.push(tempMovie)
    let stringMovieList = JSON.stringify(movieList.flat(1))
    fs.writeFileSync("./src/json/netflix.json", stringMovieList)
}

exports.deleteItems = (movieList, entry) => {
    let deleteIndex;
    movieList[0].map((movie, index) => {
        if(movie.title === entry.title) {
            deleteIndex = index;
        }
    });
    movieList[0].splice(deleteIndex, 1);
        let stringMovieList = JSON.stringify(movieList.flat(1))
        fs.writeFileSync("./src/json/netflix.json", stringMovieList)
}

exports.list = (movieList) => {
    if(command === "list"){
        console.log(movieList);
    }
}

exports.update = (movieList) => {
    const newStatus = process.argv[4];
    tempMovie = entry;
    target = tempMovie
    let updateIndex;
    movieList[0].map((movies, index) => {
    if(movies.target === tempMovie.target){
    updateIndex = index
    movieList.status = newStatus
}
});
let stringMovieList = JSON.stringify(movieList)
fs.writeFileSync("./src/json/netflix.json", stringMovieList)
console.log(`You have set the status of ${target} to "${newStatus}".`)
}