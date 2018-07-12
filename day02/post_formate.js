var http = require("http")
var formidable = require("formidable")
var util = require("util")
var fs = require("fs")
var sd = require("silly-datetime")
var path = require("path")

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
            //时间，使用了第三方模块，silly-datetime
            var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random() * 89999 + 10000);
            var extName = path.extname(files.tupian.name);
            console.log("__dirname",__dirname)
            //执行改名
            var oldPath = __dirname + "/" + files.tupian.path;
            //新的路径由三个部分组成：时间戳、随机数、拓展名
            var newPath = __dirname + "/static/uploads/format/" + ttt + ran + extName;
            console.log('old',oldPath)
            console.log('newPath',newPath)
            //改名
            fs.rename(oldPath,newPath,function(err){
                if(err){
                    throw Error("改名失败");
                }
                res.writeHead(200, {'content-type': 'text/html;charset=UTF8'});
                res.end("成功");
            });

        })
    }else if(req.url == "/"){
        //呈递form.html页面
        fs.readFile("./static/form.html",function(err,data){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end("404");
    }
}).listen(80,"127.0.0.1")