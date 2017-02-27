
function route(pathname, query, handle, response) {
    console.log("route for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](query, response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 not found");
        response.end();
    }
}

exports.route = route;