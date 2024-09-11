const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.get('/', (req, res) => {
    console.log("接受请求")
    res.send("gg");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})