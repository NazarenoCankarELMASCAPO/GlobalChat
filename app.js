const express = require("express")
const app = express()
const port = process.env.PORT

const fs = require('fs')

const path = require('path')
const routesDir = path.join(__dirname, 'routes')
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

fs.readdirSync(routesDir).forEach(file => {
  const filePath = path.join(routesDir, file)
  
  const createRoute = require(filePath)
  app.use(`/${createRoute.routeName}`, createRoute(publicPath))
})

app.listen(port, () => console.log("Running at:", port))
