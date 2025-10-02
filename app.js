/* eslint-env node */
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('<h1>App Works</h1><p>OK</p>')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
