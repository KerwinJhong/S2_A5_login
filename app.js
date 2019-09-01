const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const app = express()
const accountCheck = require('./account_check')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const keep = req.body.email
    const personData = accountCheck(req.body)
    const error = personData.err
    if (personData.err === 'have not error') {
        res.render('welcomepPage', { personData: personData })
    } else {
        res.render('index', { error: error, keep: keep })
    }
})

app.use(function(req, res) {
    res.status(400)
    console.log('reody')
    res.render('404')
})

app.use(function(error, req, res, next) {
    res.status(500)
    res.render('500')
})

app.listen(port, () => {
    console.log(`This Express server is running oh http://localhost:${port}`)
})