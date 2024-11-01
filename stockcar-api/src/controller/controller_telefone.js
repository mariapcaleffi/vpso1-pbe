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

const update = (req, res) => {
    let cliente_id = req.body.cliente_id; 
    let numero = req.body.numero; 
    let tipo = req.body.tipo; 
    

    let query = `UPDATE telefone set cliente_id='${cliente_id}', numero='${numero}', tipo='${tipo}'`
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const deletar = (req, res) => {
    let id = req.params.id; 
    let query = `DELETE FROM telefone WHERE id = ?`;

    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Telefone não encontrado' });
        } else {
            res.status(204).send(); 
        }
    });
}

module.exports = {
    create,
    read,
    update,
    deletar
}