"use strict"
function foo(arg0,arg1){
    arguments[1]=10;
    alert(arguments[1]+" "+String(arg1));
}