const mysql = require('mysql')

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'stockcar'
})

con.connect((err)=>{
    if(err) throw err
    console.log("Banco conectado com sucesso")
})

module.exports ={con}