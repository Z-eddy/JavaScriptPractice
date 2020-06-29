var arr=[1,2,3,4,5];
//reduceRight逆序,其他和reduce一样
var v=arr.reduce(function(previousVal,currentVal,curIndex,array){
    return previousVal+currentVal;//当前结果作为下一次函数的previousVal值
});//第一次运行迭代,previousVal=1,currentVal=2

alert(v);
