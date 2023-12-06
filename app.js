const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const allRoutes = require('./routes')

app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
    console.log('listening on port '+ PORT)
})