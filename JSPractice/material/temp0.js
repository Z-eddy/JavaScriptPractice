var arr = [0, 1, 5, 10, 15];
var ind=arr.indexOf(5,3);//指定的起始索引超过了,找不到就返回-1
alert(ind);//-1

var obj={
    name:"NameA"
};
var objArr = [{ name: "NameA" }];
var objArr1=[obj];
alert(objArr.indexOf(obj));//-1
alert(objArr1.indexOf(obj));//0
