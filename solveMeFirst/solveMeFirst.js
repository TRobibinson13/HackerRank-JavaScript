var a = 3;
var b = 5;

function solveMeFirst(a,b) {
    if(a >= 1 && b <= 1000) {
        var sum = a + b;
        return sum;
    }
    else{
        console.log("Variables provided are out of bounds");
        return 0;
    };
}