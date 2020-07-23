function addNumber(num1, num2){
    console.log(arguments);
    var sum=0;
    for (let i = 0; i <arguments.length; i++) {
        const num = arguments[i];
        sum=sum+num;
        
    }
    return sum;
}
var result=addNumber(5,10,100,51,849,68,20);
console.log(result);
