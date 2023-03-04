// !Lode all modules we need

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const req = require('express/lib/request');
const app = express();






// !Setup static file, Html file, ejs File

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));








// !Setup Mongodb

mongoose.connect('mongodb://localhost:27017/wikiDB',{ useNewUrlParser: true});
const wikiSchema = new mongoose.Schema({
    title:String,
    content : String,
})

const Article = mongoose.model("Article",wikiSchema);









// ! All Get and Post request
// TODO Routing chain
// app.route('/articles').get().post().delete();

app.route('/articles')

.get(function(req,res){
    Article.find({},function(err,foundArticle){
        if(!err){
            res.send(foundArticle);
        }else{
            console.log(err);
        }
    })
})

.post(function(req,res){
    
    const article1 = new Article({
        title : req.body.title,
        content : req.body.content
    })

    article1.save(function(err){
        if(err){
           res.send(err);
        }else{
            res.send("Successfully added document")
        }
    });
})

.delete(function(req,res){
    Article.deleteMany(function(err){
        if(!err){
            res.send("Successfully deleted");
        }else{
            res.send(err);
        }
    })
});



// for specific route 

app.route('/articles/:articleTitle')

.get(function(req,res){
    Article.findOne({title : req.params.articleTitle},function(err,foundArticle){
        if(foundArticle){
            res.send(foundArticle);
        }else{
            res.send("No matching article found..")
        }
    })
})

.put(function(req,res){
    Article.replaceOne(
        {title:req.params.articleTitle},
        {title : req.body.title , content:req.body.content},
        {overwrite:true},
        function(err){
            if(!err){
                res.send("successfully updated");
            }
        }
    )
})

.patch(function(req,res){
    Article.replaceOne(
        {title:req.params.articleTitle},
        {$set : req.body},
        function(err){
            if(!err){
                res.send("Successfully updated the article")
            }else{
                res.send(err);
            }
        }
    )
})

.delete(function(req,res){
    Article.deleteOne(
        {title:req.params.articleTitle},
        function(err){
            if(!err){
                res.send("Deleted Successfully");
            }else{
                res.send(err);
            }
        }
    )
});













// !Port

app.listen(3000,function(){
    console.log("Server started at port 3000");
})