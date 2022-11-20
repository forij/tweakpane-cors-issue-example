const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    res.setHeader(
        `Content-Security-Policy`,
        `script-src 'self' 'unsafe-inline'`,
    );
    next();
});

app.use('/', express.static(path.join(__dirname, 'static')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});