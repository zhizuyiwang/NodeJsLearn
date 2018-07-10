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
            var dataString = allData.toString()
            console.log(dataString)
            //将dataString转为一个对象
            var dataObj = queryString.parse(dataString)
            console.log(dataObj)
            console.log(dataObj.name)
            console.log(dataObj.sex)
            console.log(dataObj.hobby)
            res.end("success")

        })
    }
}).listen(80,"127.0.0.1")