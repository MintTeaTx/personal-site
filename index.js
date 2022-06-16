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

app.get('/resume', function (req,res){
   res.render('templates/template', {filename :'/resume'});
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


// const http = require('http');
// const dt = require('./module');
// const fs = require('fs');
// const url = require('url');
// const cls = require("./common/staticpage");
//
// http.createServer(function (req, res) {
//
//     const q = url.parse(req.url, true);
//     let filename = q.pathname;
//     if(filename == '/')
//     {
//         const cls = require('./common/staticpage');
//         cls.Load(req, res, '/home');
//     } else {
//         try {
//             const cls = require('./api' + filename);
//             cls.Load(req, res);
//         } catch (e) {
//             try {
//                 const cls = require('./common/staticpage');
//                 cls.Load(req, res, filename);
//             } catch (e) {
//                 res.writeHead(404.ejs, {'Content-Type': 'text/html'});
//                 return res.end("cheeky");
//                 console.log(e);
//             }
//
//         }
//     }
// }).listen(8080);