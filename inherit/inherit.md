<!-- 继承 -->
继承： 子类不影响父类，子类可以继承父类的一些方法（代码服用）

属性的继承： 调用父类的构造函数并用call绑定当前的运行环境
方法的继承：CreateStar.prototype = CreatePerson.prototype; // 引用类型 会出现子类修改影响到父类
            采用for in 的形式 拷贝继承
            function extend(obj2, obj1) {
                for (let attr in obj1) {
                    obj2[attr] = obj1[attr];
                }
            }
<!-- 拷贝继承 -->
<!-- 继承的其他形式 -->
类式继承: 利用构造函数（类）继承的方式

var F = function() {} // 作用是只进行方法的继承， 不进行属性的继承
F.prototype = Aaa.prototype;
Bbb.prototype = new F();
Bbb.prototype.constructor = Bbb; // 修正指向问题
<!-- 属性改变不相互影响 -->
<!-- 因为 每次都是一个新的额Aaa  -->

原型继承：借助原型来实现对象继承对象

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


拷贝继承: 通用型 有new或无new的时候 都可以用

类式继承: new 构造函数

原型继承： 无new的对象  对象的拷贝

配置参数
默认参数
有配置参数的时候使用配置参数， 没有配置参数的时候用默认参数

