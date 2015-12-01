
array = [1, 2, 3, 4, 5];


function containsNumber(str) {

var testPattern = /ddd-ddd-dddd/;
return testPattern.test(str);

}



console.log(containsNumber('800-555-1212'));
console.log(containsNumber('451-933-7899'));
console.log(containsNumber('1800-555-1212'));
console.log(containsNumber('abc-def-hijk'));
