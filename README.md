# simple-accept-language

Returns best language based on accept-language from http header

## Quick Start with the Express framework

```js
var express = require('express'),
simpleLanguage = require('simple-accept-language'),
app = express();

app.get('/', function (req, res) {
  res.send(simpleLanguage(req, ["en", "fr"], "en"));
});

app.listen(3000);
```

## Installation

```bash
$ npm install simple-accept-language
```