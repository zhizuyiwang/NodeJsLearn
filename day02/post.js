var http = require("http")
var fs = require("fs")
var path = require("path")
var url = require("url")
var queryString = require("querystring")

http.createServer(function (req,res) {
    if (req.url == "/dopost" && req.method.toLowerCase() == "post"){
        var  allData = ""
        req.addListener("data",function (chunk) {
            allData += chunk
            console.log(chunk)
        })
        req.addListener("end",function () {
            console.log(allData.toString())
            res.end("success")
        })
    }
}).listen(80,"127.0.0.1")