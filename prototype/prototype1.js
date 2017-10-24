//包装对象
var str = new String('coco');
str.num = 23;
// console.log(str.num);

var arr = [];
arr.num = 10;
Array.prototype.num2 = 20;

// console.log(arr.hasOwnProperty('num')); // true
// console.log(arr.hasOwnProperty('num2')); // false 所有的arr对象都会有num属性；


function Coco() {

}

var a1 = new Coco();
// console.log(a1.constructor, 'a1.constructor');


function Coco1() {

}

Coco1.prototype.constructor = Array;
var a2 = new Coco1();
// console.log(a2.constructor);


function Coco2() {

}
Coco2.prototype.name = 'coco'; // 自定义的属性可以找到，系统自带的属性找不到
for (let attr in Coco2.prototype) {
    // console.log(attr, 'attr');
}


function Coco3() {

}

// Coco3.prototype.name = 'coco';
// Coco3.prototype.age = 18;

Coco3.prototype = {
    constructor: Coco3,
    name: 'coco',
    age: 18
}

var a3 = new Coco3();

// console.log(a3.constructor);


function Coco4() {

}

var a4 = new Coco4();

// console.log(a4 instanceof Coco4); // true 对象与构造函数在原型链上是否有关系


var arr1 = [];
// console.log(arr1.toString == Object.prototype.toString);
// console.log(arr1.toString == Array.prototype.toString);

function Xhk() {

}

var x1 = new Xhk();

// console.log(x1.toString == Object.prototype.toString);
// console.log(x1.toString == Xhk.prototype.toString);
var arr = [];
console.log(Object.prototype.toString.call(arr) == '[object Array]'); // true 最完美的类型片判断