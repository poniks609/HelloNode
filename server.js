var http = require("http");

http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(
        '<head><meta http-equiv="Content-Type" content="text/html;charset=UFT-8" /></head>'+
        '<body><h>HelloNode</h><botton></botton></body>')
    response.end();
}).listen(8888);