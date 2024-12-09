const express = require('express')
const mahasiswaRouter = require('../new/mahasiswaRouter')
const connection = require('../new/db/connections') 

const app = express()
const PORT = 3000

app.use('/mahasiswa', mahasiswaRouter)

app.listen(PORT, () => {
    console.log('server berjalan di http://localhost:3000')
})