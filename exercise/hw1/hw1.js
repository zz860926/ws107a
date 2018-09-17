const http = require('http')

http.createServer((req, res) => {
    switch(req.url){
        case '/hello':console.log("哈囉")
        break
        case '/name':console.log("劉鳳安")
        break
        case '/id':console.log("110510502")
        break
    }

    switch(req.url){
        case '/hello':
        res.writeHead(200, {'Content-Type': 'text/html ; charset=utf-8'})
        res.write("哈囉")
        break
        case '/name':
        res.writeHead(200, {'Content-Type': 'text/html ; charset=utf-8'})
        res.write("劉鳳安")
        break
        case '/id':
        res.writeHead(200, {'Content-Type': 'text/html ; charset=utf-8'})
        res.write("110510502")
        break
        default:res.statusCode = 404;
    }
    res.end()
}).listen(3000)

console.log('Server runnint at http://localhost:3000/')