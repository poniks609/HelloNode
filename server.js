var exec = require("child_process").exec;
var http = require("http");

http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type":"text/html"});
    var content = "HelloNode";
    exec("curl -o arg https://example.com",function(arg){content = arg;});
    response.write(
        `<head><meta http-equiv="Content-Type" content="text/html;charset=UFT-8" /></head>`+
        `<body><h>${content}</h><input type="button" value="Exec" onclick="OnButtonClick();"/></body>`
    );
    console.log("conected");
    response.end();
}).listen(8888);