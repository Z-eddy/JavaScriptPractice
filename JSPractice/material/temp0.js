var arr=[];
for(var i=0;i!=10;++i){
    arr.push(i);//推入值
}
arr.shift();//弹出第1个,先入先出
alert(arr.join(" "));