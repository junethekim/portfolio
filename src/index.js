const express = require('express')
const path = require('path')
const babel = require("@babel/core")

const app = express()
const port = 3000

const templateHTML = (js) => {
    const navHTML = babel.transformFileSync(path.join(__dirname, 'nav.js'), {"presets": ["@babel/preset-react"]})
    return (
        `
            <!DOCTYPE html>
            <html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="icon" href="assets/favicon.png">
                <title>June J. Kim</title>
                <link href="css/bootstrap.min.css" rel="stylesheet">
                <link href="css/style.css" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Cantata+One|Montserrat" rel="stylesheet">
              </head>
              <body>
              <div id="nav"></div>
              <div class="container" id="root"></div>
              <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
              <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
                <!-- <script src="js-compiled/script"></script>-->
                <script>${navHTML.code}</script>
                <script>${js.code}</script>
            </body>
            </html>
            `
    )
}


app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    babel.transformFile(path.join(__dirname, 'home.js'), {"presets": ["@babel/preset-react"]}, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(templateHTML(result))
    })
})


app.get('/carta_is', (req, res) => {
    babel.transformFile(path.join(__dirname, 'carta_isr.js'), {"presets": ["@babel/preset-react"]}, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(templateHTML(result))
    })
})
app.get('/carta_ccl', (req, res) => {
    babel.transformFile(path.join(__dirname, 'carta_ccl.js'), {"presets": ["@babel/preset-react"]}, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(templateHTML(result))
    })
})
app.get('/carta_ccds', (req, res) => {
    babel.transformFile(path.join(__dirname, 'carta_ccds.js'), {"presets": ["@babel/preset-react"]}, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(templateHTML(result))
    })
})
app.get('/paypal_cashio', (req, res) => {
    babel.transformFile(path.join(__dirname, 'paypal_cashio.js'), {"presets": ["@babel/preset-react"]}, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(templateHTML(result))
    })
})
app.get('/paypal_dl', (req, res) => {
    babel.transformFile(path.join(__dirname, 'paypal_dl.js'), {"presets": ["@babel/preset-react"]}, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(templateHTML(result))
    })
})
app.get('/paypal_cc', (req, res) => {
    babel.transformFile(path.join(__dirname, 'paypal_cc.js'), {"presets": ["@babel/preset-react"]}, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(templateHTML(result))
    })
})
app.get('/truffle', (req, res) => {
    babel.transformFile(path.join(__dirname, 'truffle.js'), {"presets": ["@babel/preset-react"]}, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(templateHTML(result))
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})