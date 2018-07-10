var http = require("http")
var formidable = require("formidable")
var util = require("util")

http.createServer(function (req,res) {
    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
        var form = new formidable.IncomingForm()
        //设置文件上传的目录路径
        form.uploadDir = "./static/uploads"
        form.parse(req, function (err, fields, files) {
            //所有的文本域、单选项，都在fields存放
            //所有的文件域，files
            console.log(fields)
            console.log(files)
            console.log(util.inspect({fields: fields,files:files}))
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
            res.end("成功")
        })
    }
}).listen(80,"192.168.50.195")