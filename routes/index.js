const express = require('express')
const path = require('path')
const router = express.Router()
const publicDir = path.join(__dirname, "..", 'public')


module.exports = () => {
  const routeName = path.basename(__filename, '.js')
  
  router.get('/', (req, res) => {
    const filePath = path.join(publicDir, 'index.html')
    res.sendFile(filePath)
  })
  
  return router
}
