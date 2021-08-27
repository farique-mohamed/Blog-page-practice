const express = require("express");
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
let about="about";
let post=["blog post 1","This is an example blog post 1. This is an example blog post 1, This is an example blog post 1. This is an example blog post 1. This is an example blog post 1. This is an example blog post 1 .This is an example blog post 1. This is an example blog post 1. This is an example blog post 1. This is an example blog post 1","blog post 2","This is an example blog post 1. This is an example blog post 1, This is an example blog post 1. This is an example blog post 1. This is an example blog post 1. This is an example blog post 1 .This is an example blog post 1. This is an example blog post 1. This is an example blog post 1. This is an example blog post 1"];

app.get("/",function(req,res){
  res.render("home",{blog:post});
});

app.get("/"+about,function(req,res){
  res.render("about",{page:about});
});

app.post("/",function(req,res){
  let title = req.body.title;
  let body = req.body.body;
  post.push(title);
  post.push(body);
  res.render("home",{blog:post});
});

//res.render("page",{variable:'value'});

app.listen(3000,function(){
  console.log("Node on port 3000");
});
