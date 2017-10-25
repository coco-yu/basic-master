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
