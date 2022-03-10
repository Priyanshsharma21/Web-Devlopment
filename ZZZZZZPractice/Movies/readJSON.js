let minimist = require('minimist');
let fs = require('fs');
const { ctorRegistrySymbol } = require('jsdom/lib/jsdom/living/generated/utils');


let args = minimist(process.argv);


fs.readFile(args.source, "utf-8", function (err,json) {

    if(err){
        console.log(err);
    }
    else{

        let movies = JSON.parse(json);

        console.log(movies[2].Information[0].movie1);
        console.log(movies[2].Information[0].Rating);

    }


});