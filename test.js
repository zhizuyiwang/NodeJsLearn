var str = "1a1b1c2b";
var reg = new RegExp("1.+2.", "g");
console.log(reg.exec(str)[0])

var person =  function Person() {
    this

}