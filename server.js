const fetch = require('node-fetch');
var content = "err";
fetch('http://quotes.toscrape.com')
  .then(response => response.text())
  .then(body => content = body)
  .catch(err => content = err);

var http = require("http");

http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(
        `<head><meta http-equiv="Content-Type" content="text/html;charset=UFT-8" /></head>`+
        `<body><h>${content}</h><input type="button" value="Exec" onclick="OnButtonClick();"/></body>`
    );
    console.log("conected");
    response.end();
}).listen(8888);