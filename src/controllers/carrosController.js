const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        try {
            const {id} = req.params
            const id_cliente = id
            const key = crypto.randomBytes(4).toString('HEX');
            const { nomeCarro, anoCarro, marca, numeroPlaca } = req.body;
                await connection('carros').insert({
                    key,
                    nomeCarro,
                    anoCarro,
                    marca,
                    numeroPlaca,
                    id_cliente,
                });
                return res.status(200).send({ message: "Carro cadastrado" });
            
        } catch (error) {
            return res.status(400).send({ error: 'alguma coisa errada. Tente novamente' });
        }
    },
    async index(req, res) {
        try {
            const {id} = req.params;
            const id_cliente = id
            const carros = await connection('carros').where('id_cliente', id_cliente).select('*');
            return res.json(carros)
        } catch (error) {
            return res.status(400).send({ message: "erro" });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const key = id
            const { nomeCarro, anoCarro, marca, numeroPlaca  } = req.body;
            await connection('carros').where('key',key).update({ nomeCarro, anoCarro, marca, numeroPlaca})
            return res.status(200).send({ message: "Carro atualizado com sucesso!" });

        } catch (error) {
            return res.status(400).send({ message: "erro" });
        }
    },
    async delete(req, res){
        try {
            const { id } = req.params;
            const key = id
            await connection('carros').where('key', key).delete()
            return res.status(200).json({ message: "Carro deletado" });
        } catch (error) {
            return res.status(400).json({ message: "erro" });
        }
    },
}