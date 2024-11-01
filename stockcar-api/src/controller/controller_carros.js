const con = require('../connect/banco').con;

const create = (req, res) => {
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiculo;
    let cliente_id = req.body.cliente_id; 

    let query = `INSERT INTO carros (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id) VALUES (?, ?, ?, ?, ?)`;
    
    con.query(query, [marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
}

const update = (req, res) => {
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiculo;
    let cliente_id = req.body.cliente_id; 

    let query = `UPDATE carros set marca_veiculo='${marca_veiculo}', modelo_veiculo='${modelo_veiculo}', ano_veiculo='${ano_veiculo}', fabricacao_veiculo='${fabricacao_veiculo}', cliente_id='${cliente_id}'`
    
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

    let query = `DELETE FROM carros WHERE id = ?`;

    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Carro não encontrado' });
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