const express = require('express')
const routes = require('./routes/index.js')
const engine = require('express-handlebars').engine
require('./config/mongoose.js')

const PORT = process.env.PORT || 3000

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`)
})
