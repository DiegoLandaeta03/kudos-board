const express = require('express')
const app = express()
const PORT = 3000

const boardRoutes = require('./routes/boardRoutes')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/boards', boardRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})