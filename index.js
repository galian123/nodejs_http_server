
var server = require("./server");
var router = require("./router");
var requestHandlers =require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.hello;
handle["/get"] = requestHandlers.get;

server.start(router.route, handle);