const con = require('../connect/banco').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id; 
    let numero = req.body.numero; 
    let tipo = req.body.tipo; 
    let query = `INSERT INTO telefone (cliente_id, numero, tipo) VALUES (?, ?, ?)`;
    
    con.query(query, [cliente_id, numero, tipo], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
}

module.exports = {
    create,
    read
}