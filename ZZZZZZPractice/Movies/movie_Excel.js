let minimist = require('minimist');
let fs = require('fs');

let xl = require('excel4node');
const { Workbook } = require('excel4node');

let args = minimist(process.argv);

fs.readFile(args.source, "utf-8" , function(err,json){
    if(err){
        console.log(err);
    }

    else{
        let movies = JSON.parse(json);


        let wb = new xl.Workbook();

        let mStyle = wb.createStyle({
            font: {
                color: 'light green',
                size: 12,
              },
              alignment: {
                wrapText: true,
                horizontal: 'center',
              },
              fill : {
                type: 'pattern',
               patternType: 'solid',
                fgColor : "indigo",
              
              },
        });

        let cStyle = wb.createStyle({
            font: {
                color: 'green',
                size: 12,
              },
              alignment: {
                wrapText: true,
                horizontal: 'center',
              },
              fill : {
                type: 'pattern',
               patternType: 'solid',
                fgColor : "light green",
              
              },
        });


       

        for(let i=0; i<movies.length; i++){
            var sheet = wb.addWorksheet(movies[i].category);
            sheet.cell(1,1).string("Category").style(mStyle);
            sheet.cell(2,1).string(movies[i].category).style(cStyle);
            sheet.cell(1,2).string("Platform").style(mStyle);
            sheet.cell(2,2).string(movies[i].platform).style(cStyle);

            sheet.cell(1,4).string("Information").style(mStyle);
            sheet.cell(1,5).string("").style(mStyle);
            sheet.cell(2,4).string("Name").style(mStyle);
            sheet.cell(2,5).string("Rating").style(mStyle);

            for(let j=0; j<movies[i].Information.length; j++){
                sheet.cell(3+j,4).string(movies[i].Information[j].Name).style(cStyle);
                sheet.cell(3+j,5).string(movies[i].Information[j].Rating).style(cStyle);
            }
            

        }

        wb.write(args.dest);
    }
})