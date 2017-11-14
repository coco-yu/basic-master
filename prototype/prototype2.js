function Drag(id) {
    this.obj = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
}

window.onload = function() {
    var d1 = new Drag('div1');
    var d2 = new ChildDrag('div2');
    d1.init();
    d2.init();
}

Drag.prototype.init = function() {

    var _this = this;
    this.obj.onmousedown = function(e) {
        var e = e || event;
        _this.fnDown(e);

        document.onmousemove = function(e) {
            var e = e || event;
            _this.fnMove(e);
        }

        document.onmouseup = function(e) {
            var e = e || event;
            _this.fnUp(e);
        }
    }
    return false;
}

Drag.prototype.fnDown = function(e) {
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


function ChildDrag(id) {
    Drag.call(this, id);
}

extend(ChildDrag.prototype, Drag.prototype);

ChildDrag.prototype.fnMove = function(e) {
    var l = e.clientX - this.disX;
    var t = e.clientY - this.disY;

    if (l < 0) {
        l = 0;
    } else if (document.documentElement.clientWidth - this.obj.offsetWidth > 0 && l > document.documentElement.clientWidth - this.obj.offsetWidth) {
        l = document.documentElement.clientWidth - this.obj.offsetWidth;
    }

    if (t < 0) {
        t = 0;
    } else if (document.documentElement.clientHeight - this.obj.offsetHeight > 0 && t > document.documentElement.clientHeight - this.obj.offsetHeight) {
        t = document.documentElement.clientHeight - this.obj.offsetHeight;
    }

    this.obj.style.left = l + 'px';
    this.obj.style.top = t + 'px';
}


// 复制属性
function extend(obj1, obj2) {
    for (var attr in obj2) {
        obj1[attr] = obj2[attr];
    }
}