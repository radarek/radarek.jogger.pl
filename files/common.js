/*
 * zapozyczone z bilbioteki prototype...
*/
var $A = function(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) {
    return iterable.toArray();
  } else {
    var results = [];
    for (var i = 0, length = iterable.length; i < length; i++)
      results.push(iterable[i]);
    return results;
  }
};

Function.prototype.bind_as_event_listener = function(object) {
  var __method = this, args = $A(arguments), object = args.shift();
  return function(event) {
    return __method.apply(object, [event || window.event].concat(args));
  }
};

var Blog = {
  getLang: function() {
    if (navigator.userLanguage) {
      return navigator.userLanguage;
    } else if (navigator.language) {
      return navigator.language;
    } else {
      return "en";
    }
  }
};

$(document).ready(function() {
	if (!Blog.getLang().match(/pl(-PL)?/)) {
	  $(".translation-info").show();
	}
});
