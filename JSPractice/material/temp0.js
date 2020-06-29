var pattern=/.at/g;//不标注g全局,每次从0开始
var text="cat,bat,sat";

var matches = pattern.exec(text);
alert(matches.index);//匹配到的索引         0
alert(matches.input);//被测试的字符串       cat,bat,sat
alert(matches[0]);//匹配到的值              cat
alert(pattern.lastIndex);//下一次匹配位置   3

var matches = pattern.exec(text);
alert(matches.index);//匹配到的索引         4
alert(matches.input);//被测试的字符串       cat,bat,sat
alert(matches[0]);//匹配到的值              bat
alert(pattern.lastIndex);//下一次匹配位置   7