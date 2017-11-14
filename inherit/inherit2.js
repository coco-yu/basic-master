// 拖拽的组件开发 代码复用

function Drag() {
    this.obj = null;
    this.disX = 0;
    this.disY = 0;
    this.settings = { // 默认参数
        toDown: function() {},
        toUp: function() {}
    }
}

window.onload = function() {
    var d1 = new Drag();
    d1.init('div1');

    var d2 = new Drag();
    d2.init('div2', {
        toDown: function() {
            document.title = 'coco';
        }
    });

    var d3 = new Drag();
    d3.init('div3', {
        toDown: function() {
            document.title = 'coco';
        },
        toUp: function() {
            document.title = 'coco1';
        }
    });

    var d4 = new Drag();
    d4.init('div4', {
        toUp: function() {
            document.title = '88';
        }
    })
}

Drag.prototype.init = function(id, opt) {
    var _this = this;
    // console.log(_this, '_this');
    this.obj = document.getElementById(id);
    extend(this.settings, opt);

    this.obj.onmousedown = function(e) {
        var e = e || window.event;
        _this.fnDown(e);
        _this.settings.toDown();

        document.onmousemove = function(e) {
            var e = e || window.event;
            _this.fnMove(e);
        }

        document.onmouseup = function(e) {
            var e = e || window.event;
            _this.fnUp(e);
            _this.settings.toUp();
        }
    }
}

Drag.prototype.fnDown = function(e) {
    // var e = e || window.event;
    this.disX = e.clientX - this.obj.offsetLeft;
    this.disY = e.clientY - this.obj.offsetTop;
}


Drag.prototype.fnMove = function(e) {
    this.obj.style.left = e.clientX - this.disX + 'px';
    this.obj.style.top = e.clientY - this.disY + 'px';
}

Drag.prototype.fnUp = function(e) {
    document.onmousedown = null;
    document.onmousemove = null;
}

// 属性复制

function extend(obj2, obj1) {
    for (var attr in obj1) {
        obj2[attr] = obj1[attr];
    }
}