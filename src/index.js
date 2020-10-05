const express = require('express')
const path = require('path')
const babel = require("@babel/core");

const app = express()
const port = 3000
babel.transform("code", path.join(__dirname, '../public/script.js'));

app.use(express.static(path.join(__dirname, '../public')))

// app.get('/', (req, res) => {
//     res.send(`<div id="like_button_container"></div>`)
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})