var express = require('express'),
    path = require('path'),
    staticDir = path.join(__dirname, '/'),
    app = express();

app.use(express.static(staticDir));

app.listen(3000, function () {
    console.log('app running');
});