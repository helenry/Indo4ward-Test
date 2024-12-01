const express = require('express')
const { handler } = require('./controllers')
const PORT = process.env.PORT

const app = express()
app.use(express.json())

// get latest message
app.post('*', async (req, res) => {
    res.send(await handler(req))
})

app.listen(PORT, (e) => {
    if(e) console.log(`Error: ${e}`)
    console.log(`Server listening on PORT ${PORT}`)
})