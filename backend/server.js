const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log("It works perfectly well!!")
})

const server = http.createServer(app)

server.listen(3001)