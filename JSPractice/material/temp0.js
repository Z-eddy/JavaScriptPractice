var rgex=null;
rgex = /[bc]at/g;//g表示全局,i不区分大小写,m多行匹配
for(var i=0;i!==2;++i){
    //rgex = /[bc]at/g;//每次都创建RegExp的实例
    alert(rgex.test("catwehavetest"));
}