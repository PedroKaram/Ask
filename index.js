const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const connection = require("./Database/database")

// Database connection

connection
    .authenticate()
    .then(() => {console.log("Database connected")})
    .catch((errorMsg) => {console.log(errorMsg)})

// Configs

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes

app.get('/', (req, res) => {

    res.render('index')

})

app.get('/ask', (req, res) => {

    res.render('ask.ejs')

})

app.post('/postData', (req, res) => {

    var title = req.body.title
    var description = req.body.description

    res.send(`Formulário recebido: <br>Title: ${title}<br>Description: ${description}`)
    
})

app.listen(3000, () => {console.log("Server running!")})