let minimist = require('minimist');
let fs = require('fs');
let path = require('path');
let pdf = require('pdf-lib');


let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function (err, json) {
    if (err) {
        console.log(err);
    } else {
        let movies = JSON.parse(json);

        for (let i = 0; i < movies.length; i++) {

            let folderName = path.join(args.dest, movies[i].category);
            // fs.mkdirSync(folderName);


            for (let j = 0; j < movies[i].Information.length; j++) {
                let fileName = path.join(folderName, movies[i].Information[j].Name + ".pdf");

                createMovieInfo(movies[i].platform, movies[i].Information[j], fileName);

            }
        }

        function createMovieInfo(platform, information, fileName) {

            let platform_name = platform;
            let mName = information.Name;
            let rating = information.Rating;



            let orignalBytes = fs.readFileSync("TEMP.pdf");


            let pr2lodeOG = pdf.PDFDocument.load(orignalBytes);

            pr2lodeOG.then(function (pdfdoc) {

                let page = pdfdoc.getPage(0);

                page.drawText(platform_name, {
                    x: 335,
                    y: 490,
                    size: 30,
                });

                page.drawText(mName, {
                    x: 315,
                    y: 330,
                    size: 22,
                });

                page.drawText(rating, {
                    x: 335,
                    y: 190,
                    size: 30,
                });


                let pr2Save = pdfdoc.save();

                pr2Save.then(function(newBytes){
                    fs.writeFileSync(fileName,newBytes);
                })





            })
















        }













    }
})