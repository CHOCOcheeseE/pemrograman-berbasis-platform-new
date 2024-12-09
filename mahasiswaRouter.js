const express = require('express')
const connection = require('../new/db/connections')
const router = express.Router()


router.get('/', (req, res) => {
    connection.querry('SELECT * FROM mahasiswa', (err, result) => {
        if (err) {
            console.log('gagal mengambil data mahasiswa')
        }else{
            res.json(result)
        }
    })
})

module.exports = router