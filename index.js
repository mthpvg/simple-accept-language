"use strict";
//-----------------------------------------------------------------------------
//                                     MAIN
//-----------------------------------------------------------------------------
function findLanguage(req, supportedLanguages, defaultLanguage) {
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - VARIABLES
  var languages = [],
  qualities = [],
  acceptLanguages,
  isLangSupported;
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -INITIALIZATION
  acceptLanguages = req.headers["accept-language"].split(",");
  isLangSupported = false;
//- - - - - - - - - CURL AND CRAWLERS DON'T HAVE ACCEPT-LANGUAGE IN HTTP HEADER
  if (!acceptLanguages) {
    return defaultLanguage;
  }
//- - - - - - - - - - - - - - - - - - - - - - - - LANGUAGES AND THEIR QUALITIES
  acceptLanguages.forEach(function(language, index){
    languages.push(language.substring(0, 2));
    var qIndex = language.indexOf("q=");
    if (qIndex !== -1){
      qualities.push(parseFloat(language.substring(qIndex + 2, qIndex + 5)));
    } else {
      qualities.push(1.0);
    }
  });
//- - - - - - - - - - - - - - - - - - - - - - LANGUAGE WITH THE HIGHEST QUALITY
  var maxIndex = maxOf(qualities);
  supportedLanguages.forEach(function(language){
    if (languages[maxIndex] === language) {
      isLangSupported = true;
    }
  });
//- - RETURNS HIGHEST QUALITY LANGUAGE OR IF NOT SUPPORTED THE DEFAULT LANGUAGE
  if (isLangSupported) {
    return languages[maxIndex];
  } else {
      return = defaultLanguage;
  }
}
//-----------------------------------------------------------------------------
//                                     FUNCTIONS
//-----------------------------------------------------------------------------
function maxOf(array) {
  var maxIndex = 0;
  var max = array[maxIndex];
  for (var i = 0; i < array.length; i++) {
    array[i]
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}
//-----------------------------------------------------------------------------
//                                    EXPORTS
//-----------------------------------------------------------------------------
module.exports = findLanguage;
//-----------------------------------------------------------------------------
//                                    END
//-----------------------------------------------------------------------------
