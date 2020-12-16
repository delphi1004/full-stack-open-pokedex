const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000


app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000 , exercise 11.14 and 11.15')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})
