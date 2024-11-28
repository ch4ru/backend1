require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req,res) => {
    res.send('hello world')
})

app.get('/youtube', (req,res) => {
    res.send('<h2> Chai aur code</h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})