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
  array.forEach(function(elt, index){
    if (elt > max) {
      max = elt;
      maxIndex = index;
    }
  });
  return maxIndex;
}
//-----------------------------------------------------------------------------
//                                    EXPORTS
//-----------------------------------------------------------------------------
module.exports = findLanguage;
//-----------------------------------------------------------------------------
//                                    END
//-----------------------------------------------------------------------------
