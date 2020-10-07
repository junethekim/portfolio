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

app.get('/paypalcashio', (req, res) => {
    babel.transformFile(path.join(__dirname, 'app2.js'), {"presets": ["@babel/preset-react"]}, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(templateHTML(result))
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})