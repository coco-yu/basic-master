window.onload = function() {
    var aInp = document.getElementsByTagName('input');

    aInp[0].onclick = function() {
        var d1 = new Dialog();
        d1.init();
    }

    aInp[1].onclick = function() {
        var d2 = new Dialog();
        d2.init({
            width: '100px'
        });
    }

    aInp[2].onclick = function() {
        var d3 = new Dialog();
        d3.init({
            width: '300px',
            height: '300px',
            dir: 'right'
        });
    }
}

function Dialog() {
    this.oLogin = null;
    this.settings = {
        width: '200px',
        height: '200px',
        dir: 'center'
    }
}

Dialog.prototype.init = function(opt) {
    var _this = this;
    extend(_this.settings, opt);
    _this.create();
    _this.fnClose();
}

Dialog.prototype.create = function() {
    var _this = this;
    _this.oLogin = document.createElement('div');
    _this.oLogin.className = 'login';
    _this.oLogin.innerHTML = '<div class="title clearfix"><span>标题</span><span class="close">×</span></div><div class="content"></div>';
    document.body.appendChild(_this.oLogin);

    _this.setData();
}

Dialog.prototype.setData = function() {
    var _this = this;

    _this.oLogin.style.width = _this.settings.width;
    _this.oLogin.style.height = _this.settings.height;
    if (_this.settings.dir === 'center') {
        _this.direction();
    } else if (_this.settings.dir === 'right') {
        _this.right();
    }
}

Dialog.prototype.direction = function() {
    var _this = this;

    _this.oLogin.style.left = (viewWidth() - _this.oLogin.offsetWidth) / 2 + 'px';
    _this.oLogin.style.top = (viewHeight() - _this.oLogin.offsetHeight) / 2 + 'px';

}

Dialog.prototype.right = function() {
    var _this = this;
    _this.oLogin.style.left = viewWidth() - _this.oLogin.offsetWidth + 'px';
    _this.oLogin.style.top = viewHeight() - _this.oLogin.offsetHeight + 'px';
}

Dialog.prototype.fnClose = function() {
    var _this = this;
    var aClose = document.getElementsByClassName('close');
    aClose[0].onclick = function() {
        document.body.removeChild(_this.oLogin);
    }
}

function viewWidth() {
    return document.documentElement.clientWidth;
}

function viewHeight() {
    return document.documentElement.clientHeight;
}

function extend(obj2, obj1) {
    for (var attr in obj1) {
        obj2[attr] = obj1[attr]
    }
}