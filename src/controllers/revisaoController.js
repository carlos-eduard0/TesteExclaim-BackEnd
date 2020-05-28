const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        try {
            const {id} = req.params
            const id_carro = id
            const cod = crypto.randomBytes(4).toString('HEX');
            const id_revisao = crypto.randomBytes(4).toString('HEX');
            const { data, problema } = req.body;
                await connection('revisao').insert({
                    cod,
                    id_revisao,
                    data,
                    problema,
                    id_carro
                });
                return res.status(200).send({ message: "Revisão marcada" });
            
        } catch (error) {
            return res.status(400).send({ error: 'alguma coisa errada. Tente novamente' });
        }
    },
    async index(req, res) {
        try {
            const {id} = req.params;
            const id_carro = id
            const revisao = await connection('revisao').where('id_carro', id_carro).select('*');
            return res.json(revisao)
        } catch (error) {
            return res.status(400).send({ message: "erro" });
        }
    },

    async delete(req, res){
        try {
            const { id } = req.params;
            const id_revisao = id
            await connection('revisao').where('id_revisao', id_revisao).delete()
            return res.status(200).json({ message: "Revisão desmarcada" });
        } catch (error) {
            return res.status(400).json({ message: "erro" });
        }
    },
}