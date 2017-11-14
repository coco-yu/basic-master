function CreatePerson(name, age) { // 父类
    this.name = name;
    this.age = age;
}

CreatePerson.prototype.showName = function() {
    // console.log(this.name);
}

var p1 = new CreatePerson('coco1', 18);
p1.showName();

function CreateStar(name, age, sex) {
    CreatePerson.call(this, name, age);
    this.sex = sex;
}

// CreateStar.prototype = CreatePerson.prototype;
extend(CreateStar.prototype, CreatePerson.prototype);

CreateStar.prototype.showSex = function() {
    // console.log(this.sex);
};
var p2 = new CreateStar('coco2', 18, '女');
p2.showSex();

// console.log(p1, p2);

function extend(obj2, obj1) {
    for (let attr in obj1) {
        obj2[attr] = obj1[attr];
    }
}



var a = {
    name: 'coco'
}

var b = a;
b.name = 'xhk';

// console.log(a, '==a', b, '==b'); // 引用类型 b的name改了 a的name也随之改变

var c = {
    name: 'love coco'
}

var d = {};
for (let attr in c) {
    d[attr] = c[attr];
}

d.name = 'love xhk';

// console.log(c, 'c', d, 'd'); // 只有d修改了 c没有修改


// 继承拖拽
function Aaa() { // 父类
    this.name = [1, 2, 3];
}

Aaa.prototype.showName = function() {
    console.log(this.name);
}

function Bbb() { // 子类
    Aaa.call(this);
}

Bbb.prototype = new Aaa();

var b1 = new Bbb();
b1.showName();
console.log(b1.constructor, 'constructor');

Bbb.prototype.constructor = Bbb; // 修改Bbb的constructor为Bbb
// console.log(b1.constructor);

var b1 = new Bbb();
console.log(b1.name, '===');
// b1.name.push(4);

// 怎样实现继承

var F = function() {} // 作用是只进行方法的继承， 不进行属性的继承
F.prototype = Aaa.prototype;
Bbb.prototype = new F();
Bbb.prototype.constructor = Bbb; // 修正指向问题


var b2 = new Bbb();

console.log(b2.constructor); // Aaa
// b1.name.push(4);

console.log(b2.constructor); // Bbb
console.log(b2.name, '---');

// 原型继承 
var a = {
    name: 'coco'
}

var b = cloneObj(a);
b.name = 'xhk';
console.log(b.name, '原型继承'); // 此时b下已有name这个属性
console.log(a.name, 'a name');

function cloneObj(obj) {
    var F = function() {};
    F.prototype = obj;
    return new F();
}

// 1. 几种继承， 每种继承的好处坏处。

// 1） 类式继承

function Aaa() {
    this.name = 'coco';
}

Aaa.prototype.showName = function() {
    console.log(this.name);
}

function Bbb() {

}

Bbb.prototype = new Aaa();
var b = new Bbb();
b.showName();

// 一句话完成继承 但是有问题

Bbb.prototype = new Aaa();
var b10 = new Bbb();
console.log(b10.constructor, 'b10'); // Aaa
// 改变指向问题
Bbb.prototype.constructor = Bbb;
console.log(b10.constructor, 'b10'); // Bbb