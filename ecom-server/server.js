const express = require('express')
const app = express()
const port = process.env.PORT || 4040;

// Middleware
app.use(express.json())

// Default Route or Home Routes
app.get('/', (req, res) => {
res.status(200).send({
    message: 'Welcome to the server.!'
})
})

// Products Routes
app.get('/product', (req, res) => {
res.status(200).send({
    message: 'products are returned.'
})
})

// Server Running Call
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
