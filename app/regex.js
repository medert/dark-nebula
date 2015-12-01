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
    var testPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return testPattern.test(str);
  },

  isUSD : function(str) {
    var testPattern = /^\$[0-9]{1,3}(?:,?[0-9]{3})*(\.[0-9]{2})?$/;
    return testPattern.test(str);
  }
};
