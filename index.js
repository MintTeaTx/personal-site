const express = require('express');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req,res){
   res.render('templates/template', {filename :'/index'});
});

app.get('/resume', function (req,res){
   res.render('templates/template', {filename :'/resume'});
});
app.get('/projects/dev', function (req,res){
   res.render('templates/template', {filename :'/projects/dev'});
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
//                 res.writeHead(404, {'Content-Type': 'text/html'});
//                 return res.end("cheeky");
//                 console.log(e);
//             }
//
//         }
//     }
// }).listen(8080);