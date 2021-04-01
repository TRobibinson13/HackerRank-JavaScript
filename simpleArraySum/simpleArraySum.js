//code used for testing locally before hacker rank sumbission
var array = [1,2,3];

console.log("Beginning Script");

// the code to be inserted into hacker rank
function simpleArraySum(ar) {
    var arrayMin = 0;
    var arrayCount = 0;
    var sum = 0;

    console.log(`Array Min Size: ` + arrayMin);
    console.log(`Array Starting Count: ` + arrayCount);
    console.log(`Array Lenght: ` + ar.length);

    if(ar.length > arrayMin){
        ar.forEach(element => {
            if(element <= 1000) {
                sum = sum + element;
            }
            else {
                console.log(`Integer at array postion of ${arrayCount} is out of range with a value of {integer}`)
            }

            arrayCount++ ;
        });
        return sum;
    }
    else{
        console.log(`Array length out of range with a value of ${ar.Length}`);
        return total = 0;
    }
}
console.log(simpleArraySum(array));