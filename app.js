const express = require("express")
const app = express()
const port = process.env.PORT

const fs = require('fs')

const path = require('path')
const routesDir = path.join(__dirname, 'routes')
const publicDir = path.join(__dirname, 'public')
app.use(express.static(publicPath))

app.get("/", (req, res) => {
  res.send("HOla")
})

app.listen(port, () => console.log("Running at:", port))
