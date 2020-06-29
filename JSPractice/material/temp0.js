var arr = [0, 1, 5, 10, 15];
//迭代方法,必须有3个参数:项,项索引,数组对象
var everyResult = arr.every(function (item, index, array) {//every返回所有项为真
    return item > 2;
});//false

var someResult = arr.some(function (item, index, array) {//some返回任意一项为真
    return item > 2;
});//true

var filterResult = arr.filter(function (item, index, array) {//filter返回为真的数组项
    return item > 2;
});//5,10,15

arr.forEach(function (item, index, array) {//forEach无返回值,对每一项做某个操作
    array[index] = item + 1;
});

var mapResule = arr.map(function (item, index, array) {//map返回每一项运行结果的数组
    return item + 2;
});

alert(mapResule);
