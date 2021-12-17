const express = require('express')
const engine = require('express-handlebars').engine

const PORT = process.env.PORT || 3000

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`)
})
