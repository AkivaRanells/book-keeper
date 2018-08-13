const express = require('express');
const app = express();
app.listen(8080);
console.log('running');
app.use(express.static('public'));
app.get('/me', function(req, res){
    res.send("sup");
})