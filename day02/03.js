var http = require("http")
var fs = require("fs")
var path = require("path")
var url = require("url")
var router = require("./router.js")

http.createServer(function (req,res) {
    if (req.url == "/") {
        router.showIndex(req,res);
    }else if (req.url.substr(0,9) == "/student/"){
        router.showStudent(req,res);
    } else {
        router.show404(req,res);
    }
     res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
     res.end("成功")
}).listen(80,"127.0.0.1")