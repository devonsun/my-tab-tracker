const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
// HTTP request logger middleware for node.js
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Create an endpoint
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! your user was registered! Have fun!`
  })
})

app.listen(process.env.PORT || 8081)


