let express = require('express');
let app = express();

app.use(express.urlencoded({extended: true}));

let router = require('./routes');
app.use('/', router);

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});