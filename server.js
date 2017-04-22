const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, function() {
    console.log("server listening on port " + port);
});
