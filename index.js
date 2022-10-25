const express = require("express")
const bodyParser = require("body-parser")
const app = express()


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

app.listen(3000, () => {console.log("Server running!")})