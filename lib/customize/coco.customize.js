$(function () {
  // $('btn').onclick = function() {
  //   console.log('111111111');
  //   $(this).style.backgroundColor = '#f00';
  // };
});


function $(v) {
  if (typeof v === 'function') {
    window.onload = v;
  } else if (typeof v === 'string') {
    return document.getElementById(v);
  } else if (typeof v === 'object') {
    return v;
  }
}


// 返回0~a的数组
function getArr(a) {
  var arr = [];
  for (var i = 0; i <= a; i++) {
    arr.push(i);
  }
  return arr;
}
// alert(getArr(7));


// 返回a~b的数组
function paramsArr(a, b) {
  var arr = [];
  var _arr = [];
  if (a < b) {
    for (var i = a; i <= b; i++) {
      arr.push(i);
    }
  } else {
    for (var j = a; j >= b; j--) {
      _arr.push(j);
    }
    arr = _arr.reverse();
  }
  return arr;
}
// alert(paramsArr(1, 5));
// alert(paramsArr(12, 8));


// 求和 sum
function sum() {
  var sum = 0;
  var flag = arguments[arguments.length - 1];
  if (flag === '+') {
    for (var i = 0; i < arguments.length - 1; i++) {
      sum += arguments[i];
    }
  } else if (flag === '-') {
    for (var j = 0; j < arguments.length - 1; j++) {
      sum = arguments[0];
      for (var i = 1; i < arguments.length - 1; i++) {
        sum -= arguments[i];
      }
    }
  }
  return sum;
}

// alert(sum(1, 2, 3, 4, 5, '+'));
// alert(sum(10, 2, '-'));
// alert(sum(10, 2, 3, 4, '-'));

// 获取当前元素的属性值
// a 元素
// b 元素的属性
function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj)[attr];
  }
}


function doMove(obj, dir, target, attr, endFn) {
  dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var oldLeft = parseInt(getStyle(obj, attr)) + dir;
    if (oldLeft < target && dir < 0 || oldLeft > target && dir > 0) {
      oldLeft = target;
    }
    obj.style[attr] = oldLeft + 'px';
    if (oldLeft == target) {
      clearInterval(obj.timer);
      if (endFn) {
        endFn();
      }
      // endFn && endFn();  写法和上面的if判断endFn是否存在一样作用
    }
  }, 30);
}

// 元素抖动
function shake(maxpos, step, obj, attr, endFn) {
  obj.arr = [];
  obj.timer = null;
  obj.num = 0;
  obj.pos = parseInt(getStyle(obj, attr));
  for (var i = maxpos; i > 0; i -= step) {
    obj.arr.push(i, -i);
  }
  obj.arr.push(0);
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    obj.style[attr] = obj.pos + obj.arr[obj.num] + 'px';
    obj.num++;
    if (obj.num === obj.arr.length) {
      clearInterval(obj.timer);
      endFn && endFn();
      obj.num %= obj.arr.length;
    }
  }, 100);
}
