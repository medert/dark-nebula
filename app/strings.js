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

  },
  reverseString: function(str) {

  }
};
