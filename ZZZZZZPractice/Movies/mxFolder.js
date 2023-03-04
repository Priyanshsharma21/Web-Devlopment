let minimist = require('minimist');
let fs = require('fs');
let path = require('path');

let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function (err, json) {
    if (err) {
        console.log(err);
    } else {

        let movies = JSON.parse(json);

        for (let i=0; i<movies.length; i++){
            let folderName = path.join(args.dest, movies[i].category);
            fs.mkdirSync(folderName);
        }


    }
})