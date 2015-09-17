# simple-accept-language [PRE-ALPHA]

##WARNING [PRE-ALPHA]

Returns best language based on accept-language from http header

## Installation

```bash
$ npm install simple-accept-language
```

## Quick Start with the Express framework

```js
var express = require('express'),
simpleLanguage = require('../index'),
app = express();

app.get('/', function (req, res) {
  var defaultLanguage = "en",
  supportedLanguages = ["en", "fr"];
  res.send(simpleLanguage(req, defaultLanguage, supportedLanguages));
});

app.listen(3000);
```

## TODO

- Testing
- optional arguments