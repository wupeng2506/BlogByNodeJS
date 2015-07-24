var http = require("http");
var server = http.createServer(function(req, res){
    swtich(){}
    res.setHeader("Content-Length", body.length);
    res.setHeader("Content-Type", "text/plain");
    res.StatusCode = 200;
    res.end(body);
});

server.listen(1234);