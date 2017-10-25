function CreatePerson(name, age) { // 父类
    this.name = name;
    this.age = age;
}

CreatePerson.prototype.showName = function() {
    console.log(this.name);
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
    console.log(this.sex);
};
var p2 = new CreateStar('coco2', 18, '女');
p2.showSex();

console.log(p1, p2);

function extend(obj2, obj1) {
    for (let attr in obj1) {
        obj2[attr] = obj1[attr];
    }
}



// var a = {
//     name: 'coco'
// }

// var b = a;
// b.name = 'xhk';

// console.log(a, 'a', b, 'b'); // 引用类型 b的name改了 a的name也随之改变

// var c = {
//     name: 'love coco'
// }

// var d = {};
// for (let attr in c) {
//     d[attr] = c[attr];
// }

// d.name = 'love xhk';

// console.log(c, 'c', d, 'd'); // 只有d修改了 c没有修改