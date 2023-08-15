const express = require("express")
const app = express()
const port = process.env.PORT

const fs = require('fs')

const path = require('path')
const routesDir = path.join(__dirname, 'routes')

fs.readdirSync(routesDir).forEach(file => {
  const filePath = path.join(routesDir, file)
  const route = require(filePath)

  const routeName = path.basename(file, '.js')
  app.use(`/${routeName}`, route)
})

app.listen(port, () => console.log("Running at:", port))