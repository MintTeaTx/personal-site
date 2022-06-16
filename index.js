const express = require('express');
const path = require('path');
const fs = require('fs');
const favi = require('serve-favicon');

const app = express();

app.set('view engine', 'ejs');
app.use(favi(path.join(__dirname, 'public','images','favicon.ico')));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req,res){
   res.render('templates/template', {filename :'/index'});
});

app.all('*', (req, res) => {
   console.log(req.params[0]);
   const file = req.params[0];
   fs.access('./views/pages'+file+'.ejs', fs.F_OK, (err)=> {
      if (err) {
         res.render('templates/template', {filename :'/404'});
      } else {
         res.render('templates/template', {filename :''+file});
      }

   });
});

app.listen(8080, function ()
{
   console.log('listening on 8080');
});