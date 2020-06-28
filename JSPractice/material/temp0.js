var arr = [0, 1, 5, 10, 15];

function compare(num0, num1) {
    var delta = num0 - num1;
    var ok = 0;
    switch (delta) {
        case delta < 0:
            ok = -1;
            break;
        case delta > 0:
            ok = 1;
            break;
        default:
            break;
    }
    return ok;
}

function sub(num0,num1){
    return num0-num1;
}

arr.sort(sub);
//arr.reverse()
alert(arr.join(" "));