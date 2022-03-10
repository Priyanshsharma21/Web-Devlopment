// node Data.js --url="https://agoodmovietowatch.com/all/"   --dest=mov.html

let minimint = require('minimist');
let axios = require('axios');
let fs = require('fs');

let args = minimint(process.argv);

let downlode_promise = axios.get(args.url);

downlode_promise.then(function(res){

    let html = res.data;

fs.writeFileSync(args.dest,html,"utf-8");

}).catch(function(err){
    console.log(err);
})


