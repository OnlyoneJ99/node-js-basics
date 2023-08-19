

const http = require("http")

const server = http.createServer((req,res)=>{
    const path = res.url

    if(path === "/login"){
        res.end("login page")
    }
})

server.listen(3000,()=>{
    console.log("running")
})