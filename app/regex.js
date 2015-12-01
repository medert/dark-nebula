exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return (/([a-zA-Z]).*?\1/).test(str)
  },

  endsWithVowel : function(str) {
    return /[aeiouAEIOU]/.test(str[str.length-1]);
  },

  captureThreeNumbers : function(str) {
    var number = str.match(/\d+/g);
      if (number === null) {
        return false;
      } else if (number[0].length > 2) {
        return number[0].substring(0,3);
      } else {
        return false;
      }
  },

  matchesPattern : function(str) {
    var testPattern = /[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
    return testPattern.test(str);
  },

  isUSD : function(str) {

  }
};