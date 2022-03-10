// !Lode all modules we need

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
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













// !Port

app.listen(3000,function(){
    console.log("Server started at port 3000");
})