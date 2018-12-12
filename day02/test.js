// {
//     let a = 10;
//     var b = 3;
//     console.log(a)
// }
// console.log(b)
//
// for (let i = 0; i < 10; i++){
//     let pp = function(){
//         console.log(i)
//     }
// }
Array.prototype.test = function(){
    console.log("000")
}
var leo = [1,2,3,4,5]
leo.forEach(element => {
    // if(element === 3){
    //    return false
    // }
    console.log(this)
},"90")
var obj1 = {
    1:1,
    2:2
}
for (var i in obj1){
    // if(parseInt(i)===0){
    //     continue
    // }
    console.log(typeof i)
    console.log(typeof  obj1[i])
}
for (var i = 0; i < leo.length; i++){
    // if (i===3){
    //     continue
    // }
    console.log(leo[i])
}
var arr99 = [1,2,3,4,5]
for (i in arr99){
    console.log(typeof i)
    console.log(arr99[i])
}


// var obj = {
//     pp: '9',
//     ll: '0'
// }
// obj.forEach(element => {
//     console.log(element)
// } )

//去除数组中相同的元素
function unique(array){
    var arr = []
    array.forEach(function(val,key,arrself){
        //在forEach循环中不可以使用break和continue
        //break;break没有代替方案
        //continue;可以使用return代替continue
        //return;return false;return true;效果相同，跳出本次，继续下次循环
        arr.push(val)
        for(var i=0;i < arr.length - 1;i++){
            if(arr[i]==val){
                arr.pop();
                break;
            }
        }
    },'123')
    return arr;
}

var array=[1,1,2,3,4,4,5,1]
var newarray = unique(array)
//console.log(newarray)
try {
    var arr = [7,8,9,10]
    arr.forEach((item,index) => {
        if (item ===9){
            throw new Error("出错了")
        }
        console.log(item)
    })
    
}catch (e) {
    if(e.message == "出错了"){
        console.log(e.message)
    }
}

let arr11 = [1, 2, 3, 4, 5];
let newArr = arr11.forEach((num, index) => {
    return arr11[index] = num * 2;
});
console.log(newArr)
console.log(arr11)

let doubled = arr11.map(num => {
    return num * 2;
});
console.log(doubled)


var arr = ['adam', 'LISA','barT',223,"大团长"];
function toName(x){
    x=x.toString();//防止数字干扰，提前把对象转换成字符串，toLocaleLowerCase() 只能被字符串调用。
    x = x.toLocaleLowerCase();// 把整个字符串转换成小写
    var x1 = x.substr(0,1).toUpperCase();// 截取第一个字符并将其转换成大写字母
    var x2 = x.substr(1);// 取到从第二个开始到最后的字符串
    x = x1+x2;
    return x;
}
// 注意这里不带括号
arr=arr.map(toName);
console.log(arr);

var map = Array.prototype.map
var a = map.call("Hello World", function(x) {
    return x.charCodeAt(0);
})
console.log(a)

var str = '12345';

var zifuchuan = Array.prototype.map.call(str, function(x) {   //同时利用了call()方法
    return x;
}).reverse().join('');
console.log(zifuchuan)

console.log(["1", "2", "3"].map(parseInt))

function returnInt(element){
    return parseInt(element,10);
}

console.log(["1", "2", "3"].map(returnInt));


let aArray = '132'
aArray.name = 'pp'
for(index in aArray){
    console.log(index)
    console.log(`${aArray[index]}`);
}
for(value of aArray){
    console.log(value);

}
let aObj = {
    1:1,
    2:2
}
for (var i = 0; i < aObj.length; i++){
    console.log("i",aArray[i])
}

let newArr44 = [1,23,3]
newArr44.name = 'ppp'

for (key of newArr44){
    console.log("key",key)
}

var student={
    name:'wujunchuan',
    age:22,
    locate:{
        country:'china',
        city:'xiamen',
        school:'XMUT'
    }
}
for(var key of Object.keys(student)){
    //使用Object.keys()方法获取对象key的数组
    console.log(key+": "+student[key]);
}
let obj = {
    'name': 'tom',
    'id': 200,
    'introduce': '换行'
}
let {id, name, introduce} = obj

console.log(id)
let ss = {
    name: 'bon',
    age: 1,
    sex: "nan"
}
let myArrs = [1,'pp',2]

console.log(1,2,...myArrs)

console.log(encodeURIComponent("哈哈@"))
console.log(encodeURI("哈哈@"))


let regStr = "cabcdbbdbsdbdbz"
//reg = /ab+c/
reg = new RegExp('db+d','g')
//console.log(reg.test(regStr))
console.log(reg.exec(regStr))
console.log(reg.exec(regStr))
console.log(reg.exec(regStr))

var str = '2013-6-7';

var re = /(\d+)(-)/g;

var str098 = str.replace(re,function($0,$1,$2){
    //第一个参数：$0（整体）
    //第二个参数 : $1(第一括号里的正则)
    //第三个参数 : $1(第二个括号里的正则)

    //alert( $2 );

    return $1 + '.';

    //return $0.substring(0,$0.length-1) + '.';

});

console.log(str098)

