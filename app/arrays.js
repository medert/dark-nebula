exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for(var i = arr.length; i -= 1;){
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;

  },

  count : function(arr, item) {
    var count = 0;
    for (i = 0; i < arr.length; i++) {
      if(arr[i] === item)
        count += 1;
      }
      return count;
  },

  duplicates : function(arr) {
    arr.sort();

    var list = [];
    for(i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        if (list.indexOf(arr[i]) < 0) {
        list.push(arr[i])
        };
      };
    };
    return list;
  },

  square : function(arr) {
    var list = []
    for(i = 0; i < arr.length; i++) {
      var element = Math.pow(arr[i], 2);
      list.push(element)
    }
    return list;

  },

  findAllOccurrences : function(arr, target) {
    var list = []
    for(i = 0; i < arr.length; i++) {
      if (arr[i] === target){
        var element = i;
        list.push(element);
      };
    };
    return list;
  }
};
