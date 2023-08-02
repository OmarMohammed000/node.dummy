const http = require('http');
const server = http.createServer((req,res) =>{
    if (req.url ==='/'){
        res.end(" 3mna dh el home")
    }
    if (req.url === '/about'){
        res.end('3mna dh el about')
    }
    
        res.end(` <h1 style="color:red">out</h1>
        
        `)
    
})
server.listen(5000)