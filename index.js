const express = require("express")
const app = express()
const port = 4000

app.get("/", (req, res) => {
    res.send("Hola")
})

app.listen(port, () => console.log("Running at:", port))