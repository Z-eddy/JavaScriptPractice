var arr=[1,2,3,4,5]
for (let index = 0; index < arr.length; ++index) {
    const element = arr[index];
}
arr[9]="test"
alert(arr[8] + " " + arr[9])