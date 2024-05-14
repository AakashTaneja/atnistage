const express = require('express');
const router = express.Router();

htmlContent =  `
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Response</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is HTML content returned by the API.</p>
  </body>
</html>
`

module.exports = router