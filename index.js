const express = require('express')
const app = express()
const port = 3000

app.get('/`', function(req, res) {
    res.send('hello')
})

app.listen(port, () => console.log(`Server is listening on port ${port}`))