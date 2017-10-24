hasOwnProperty();看是不是对象自身下面的属性
constructor:查看对象的构造函数

for in的时候有些属性是找不到的(系统自动生成的是找不到的，自己添加的可以找到)

instanceof: 对象和构造函数在原型链上是否有关系

toString()
1. 系统对象都是找自己下面的方法
    var arr = [];
    console.log(arr.toString == Object.prototype.toString);
2. 自定义的对象都是找object下面的方法
    function Coco() {

    }
    var a1 = new Coco();
    console.log(a1.toString == Object.prototype.toString);
