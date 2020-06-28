var arr=[];
for (var i = 0; i != 10; ++i) {
    arr[arr.length]=i;//每次在最后添加1
}

var s="";
for (let i = 0; i !=arr.length; ++i) {
    s += i !== arr.length - 1 ? i + " " : i;//最后一个不加空格
}
alert(s);