window.onload = function() {
    var aInp = document.getElementsByTagName('input');

    aInp[0].onclick = function() {
        var d1 = new Dialog();
        d1.init({
            isNow: 0
        });
    }

    aInp[1].onclick = function() {
        var d2 = new Dialog();
        d2.init({
            isNow: 1,
            width: '100px',
            mask: true
        });
    }

    aInp[2].onclick = function() {
        var d3 = new Dialog();
        d3.init({
            isNow: 2,
            width: '300px',
            height: '300px',
            dir: 'right'
        });
    }
}

function Dialog() {
    this.oLogin = null;
    this.oMask = null;
    this.settings = {
        isNow: false,
        width: '200px',
        height: '200px',
        dir: 'center',
        mask: false
    }
}

Dialog.prototype.json = {};

Dialog.prototype.init = function(opt) {
    var _this = this;
    extend(_this.settings, opt);
    if (_this.json[opt.isNow] == undefined) {
        _this.json[opt.isNow] = true;
    }
    if (_this.json[opt.isNow]) {
        _this.create();
        _this.fnClose();
        if (_this.settings.mask) {
            _this.mask();
        }
        _this.json[opt.isNow] = false;
    }

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
    _this.oMask = document.getElementById('mask');
    for (var i = 0; i < aClose.length; i++) {
        aClose[i].onclick = function() {
            document.body.removeChild(_this.oLogin);
            if (_this.settings.mask) {
                document.body.removeChild(_this.oMask);
            }
            // console.log(_this.json, 'json');
            _this.json[_this.settings.isNow] = true;
        }
    }
}

Dialog.prototype.mask = function() {
    var _this = this;
    _this.oMask = document.createElement('div');
    _this.oMask.id = 'mask';
    document.body.appendChild(_this.oMask);
    if (_this.settings.mask) {
        // console.log('true');
        _this.oMask.style.display = 'block';
    } else {
        // console.log('false');
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