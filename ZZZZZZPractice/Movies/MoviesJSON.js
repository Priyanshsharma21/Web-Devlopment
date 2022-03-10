let minimist = require('minimist');
let fs = require('fs');

let args = minimist(process.argv);

let movies = [

    {
        category: "Dramatic",
        platform: "Netflix",
        Information: [{
                Name: "Seena (2010)",
                Rating: "9.5"
            },
            {
                Name: "Operation Odessa(2018)",
                Rating: "8.9"
            }
        ]

    },

    {

        category: "Emotional",
        platform: "Netflix",
        Information: [{
                Name: "Tell Me Who I Am (2019)",
                Rating: "8.2"
            },
            {
                Name: "Undefeated (2011)",
                Rating: "8.4"
            }
        ]




    },

    {

        category: "Inspiring",
        platform: "Netflix",
        Information: [{
                Name: "Last Breadth (2019)",
                Rating: "7.2"
            },
            {
                Name: "Gather (2020)",
                Rating: "9.4"
            }
        ]


    },

    {

        category: "Animation",
        platform: "Netflix",
        Information: [{
                Name: "I Lost My Body (2019)",
                Rating: "8.2"
            },
            {
                Name: "Klaus (2019)",
                Rating: "8.9"
            }
        ]


    },



]

console.log(movies[2].Information[0].movie1);
console.log(movies[2].Information[0].Rating);


let json = JSON.stringify(movies);

fs.writeFile(args.dest, json, "utf-8", function (err, data) {

    if (err == null) {
        console.log(data);
    } else {
        console.log(err);
    }

});