const express = require('express')
const engine = require('express-handlebars').engine
require('./config/mongoose.js')
const URL = require('./models/urlSchema.js')
const getRandom = require('./utils/get-random.js')

const PORT = process.env.PORT || 3000

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  URL.find().sort('-_id').lean().then(urls => {
    res.render('index', { urls })
  }).catch(err => {
    console.error(err)
  })
})

app.get('/:short', (req, res) => {
  const short = req.params.short
  URL.findOne({ short }).then(url => {
    if (url) {
      res.redirect(url.full)
    } else {
      res.redirect('/')
    }
  }).catch(err => {
    console.error(err)
  })
})

app.post('/', (req, res) => {
  const full = req.body.full
  URL.findOne({ full }).lean().then(url => {
    if (url) {
      return url
    } else {
      const origin = req.headers.origin
      const short = getRandom(5)
      URL.create({ full, origin, short })
      return { full, origin, short }
    }
  }).then(url => {
    res.render('short', { url })
  }).catch(err => {
    console.error(err)
  })
})

app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`)
})
