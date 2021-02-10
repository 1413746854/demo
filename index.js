const express = require('express')

const app = express()

app.get('/fh', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin','*')
  response.send('hellloWord')
})

app.all('/f', (request, response)=>{
  response.setHeader('Access-Control-Allow-Origin','*')
  response.send('网络有问题的')
})

app.listen(8000, ()=>{
  console.log('服务器已经启动端口8000')
})