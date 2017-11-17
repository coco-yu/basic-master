var aLi = document.getElementsByTagName('li');
var oDiv = document.getElementById('div1');

var a = 0;
for (var i = 0; i < aLi.length; i++) {
    aLi[i].ondragstart = function() {
        this.style.backgroundColor = '#00f';
    }

    aLi[i].ondrag = function() {
        document.title = a++;
    }

    aLi[i].ondragend = function() {
        this.style.backgroundColor = '#f00';
    }
}

oDiv.ondragenter = function() {
    this.style.backgroundColor = '#00f';
}
oDiv.ondragleave = function() {
    this.style.backgroundColor = '#f00';
}
oDiv.ondragover = function(e) {
    // document.title = a++;
    // 想要触发drop事件 需要组织dragover的默认时间
    e.preventDefault();
}
oDiv.ondrop = function() {
    console.log('drop');
}