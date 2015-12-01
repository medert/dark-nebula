
array = [1, 2, 3, 4, 5];


function containsNumber(str) {

var testPattern = /^\$[0-9][0-9\,]*(\.\d{1,2})?$|^\$?[\.]([\d][\d]?)$/;
return testPattern.test(str);

}



console.log(containsNumber('$132.03'));
console.log(containsNumber('$32.03'));
console.log(containsNumber('$2.03'));
console.log(containsNumber('34,344.34'));
console.log(containsNumber('$,344.34'));
console.log(containsNumber('$34,344_34'));
console.log(containsNumber('$3,432,12.12'));
console.log(containsNumber('$3,432,1,034.12'));
