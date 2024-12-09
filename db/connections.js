const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_fathirti23a',
})

connection.connect( (error) => {
    if (error){
        console.log('Gagal koneksi ke database', error)
    }else{
        console.log('Berhasil koneksi ke database')
    }
} )

module.exports = connection