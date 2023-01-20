const express = require('express');
const fs = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'all-views');
app.get('/', function(req, res){
    fs.readFile('./country.json', (err, data) => {
        const listObj= JSON.parse(data);
        if(err) {
            res.status(400).send('Error Not Found');
        } else {
            res.render('entrollpage', {lists: listObj});
        }});
    });

app.get('/show', function(req, res){
        res.render('show_page');
        });
    
    app.listen(3000, function(){
    console.log('Listening on port 3000');
});