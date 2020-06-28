var obj0={
    toString:function(){
        return "string";
    },
    toLocaleString:function(){
        return "***localS";
    }
}

var obj1={
    toString:function(){
        return "obj1String";
    },
    toLocaleString:function(){
        return "***localObj1";
    },
    other:function(){
        return "otherFunc";
    }
}

var arr=[obj0,obj1];
alert(arr.join("$"));
alert(arr.toString());
alert(arr.toLocaleString());
alert(obj1.other())