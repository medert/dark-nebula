exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr = str.split('');
    var list = [];

    for (i = 0; i < arr.length; i++) {
      if(arr[i] != list[list.length-1]){
        list.push(arr[i]);
      } else if (arr[i] != list[list.length-amount]) {
        list.push(arr[i]);
      };
    };
    return list.join('');
  },

  wordWrap: function(str, cols) {
    var counter = 0;
    outputString = '';
    array = str.split(' ');
    for(var i = 0; i < array.length; i++){
     if(i !==array.length -1) {
       if(array[i].length + array[i+1].length + counter < cols){
         counter += array[i].length;
         outputString += array[i] + " ";
       }else {
         outputString += array[i] + "\n";
         counter = 0;
       }}
     else {outputString += array[i];}
   }
     return outputString;

  },
  reverseString: function(str) {
    return str.split('').reverse().join('');

  }
};
