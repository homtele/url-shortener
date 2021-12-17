const express = require('express')
const engine = require('express-handlebars').engine
const URL = require('./models/urlSchema.js')
require('./config/mongoose.js')

const PORT = process.env.PORT || 3000

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  URL.find().lean().then(urls => {
    res.render('index', { urls })
  })
})

app.post('/', (req, res) => {
  const full = req.body.full
  const short = '12345'
  URL.create({ full, short }).then(() => {
    res.redirect('/')
  })
})

app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`)
})
