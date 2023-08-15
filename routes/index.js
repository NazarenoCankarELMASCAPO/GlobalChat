const express = require('express')
const path = require('path')
const router = express.Router()

module.exports = (publicPath) => {
  const routeName = path.basename(__filename, '.js')
  
  router.get('/', (req, res) => {
    const filePath = path.join(publicPath, 'index.html')
    res.sendFile(filePath)
  })
  
  return router
}
