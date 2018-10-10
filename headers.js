const fs = require('fs');

module.exports.appJS = (req, res, payload, cb)=>{
    fs.readFile('./public/index.js', (err, data)=>{
        if(!err)
            cb(null, data, 'text/javascript');
        else
            console.error(err);
    })
}

module.exports.formJS = (req, res, payload, cb)=>{
    fs.readFile('./public/form.js', (err, data)=>{
        if(!err)
            cb(null, data, 'text/javascript');
        else  
            console.error(err);
    })
}

module.exports.getIndexHtml = (req, res, payload, cb)=>{
    fs.readFile('./public/index.html', (err, data)=>{
        if(!err)
            cb(null, data, 'text/html');
        else
            console.error(err);
    })
}

module.exports.getFormHtml = (req, res, payload, cb)=>{
  fs.readFile('./public/form.html', (err, data)=>{
    if (!err) 
      cb(null, data, 'text/html');
      else
        console.error(err);
  })
}


module.exports.siteCSS = (req, res, payload, cb)=>{
    fs.readFile('./public/site.css', (err, data)=>{
        if(!err)
            cb(null, data, 'text/css');
        else
            console.error(err);
    })
}