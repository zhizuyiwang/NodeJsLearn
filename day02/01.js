//只在服务第一次起来的时候才导入
var http= require("http")
var fs = require("fs")
var url = require("url")
var path = require("path")

http.createServer(function (req,res) {//以后每个用户再来访问直接进入function方法中
     //这里如果不用req.url来if判断，那么用户不管输入什么网址，做的事情都一样

    //得到地址访问的地址
    var pathName = url.parse(req.url).pathname//得到除去（127.0.0.1）之后的路径。访问http://127.0.0.1/q/p，得到/q/p
    console.log("pathName===",pathName)
    //判断此时用户输入的地址是文件夹地址还是文件地址
    //如果是文件夹地址，那么自动请求这个文件夹中的index.html
    if(pathName.indexOf(".") == -1){//路径中没有"."分隔符
        pathName += "/index.html";
    }
    //输入的网址是127.0.0.1/images/logo.png
    //实际请求的是./static/images/logo.png
    var fileURL = "./" + path.normalize("./static/"+pathName)
    //得到拓展名
    var extName = path.extname(pathName);
    console.log(fileURL)
    //把访问的文件读出来
    fs.readFile(fileURL,function (err,data) {
        //读完之后做的事情
        if(err){
            //文件不存在
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"})
            res.end("404,页面没有找到")
            return
        }
        getMime(extName,function (mime) {
            console.log(mime)
            res.writeHead(200,{"Content-Type":mime})
            res.end(data)
            return
        })
    })
}).listen(80,"127.0.0.1")

function getMime(extName,callback){
    //读取mime.json文件，得到JSON，根据extName key ，返回对应的value
    //读取文件
    fs.readFile("./mime.json",function(err,data){
        if(err){
            throw Error("找不到mime.json文件！");
            return;
        }
        //转成JSON
        var mimeJSON = JSON.parse(data);
        var mime =  mimeJSON[extName]  || "text/plain";
        //执行回调函数，mime类型字符串，就是它的参数
        callback(mime+";charset=UTF8");
    });
}