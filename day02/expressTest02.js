var express = require('express');
var app = express();

app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render("haha",{
        "news": ["hahah","pppp","ooooo"]
    })
})

app.listen(3000)