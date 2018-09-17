const http = require('http')

http.createServer((req, res) => {
    switch(req.url){
        case '/hello':console.log("hello")
        break
        case '/name':console.log("FengAn Liu")
        break
        case '/id':console.log("110510502")
        break
    }

    res.setHeader('Content-Type', 'text/plain')
    switch(req.url){
        case '/hello':res.write("hello")
        break
        case '/name':res.write("FengAn Liu")
        break
        case '/id':res.write("110510502")
        break
        default:res.statusCode = 404;
    }
    res.end()
}).listen(3000)

console.log('Server runnint at http://localhost:3000/')