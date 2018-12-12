var express = require("express");

var app = express();

app.get("/",function (req,res) {
    res.send("你好")
})
app.get("/haha",function (req,res) {
    res.send("这是哈哈哈页面")
})
app.listen(3000)
app.get("/",function (req,res) {
    
})