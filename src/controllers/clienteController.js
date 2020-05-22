const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {

        try {
            const { nome, idade, email, telefone, cpf, rg, orgaoEmissor, nomeCarro, anoCarro, marca, numeroPlaca, cidade, uf, bairro, end, numero, cep, complemento } = req.body;
            const id = crypto.randomBytes(4).toString('HEX');
            const cliente = await connection('clientes')
                .where('email', email)
                .select('*')
                .first()

            if (!cliente) {
                await connection('clientes').insert({
                    id,
                    nome,
                    idade,
                    email,
                    telefone,
                    cpf,
                    rg,
                    orgaoEmissor,
                    nomeCarro,
                    anoCarro,
                    marca,
                    numeroPlaca,
                    cidade,
                    uf,
                    bairro,
                    end,
                    numero,
                    cep,
                    complemento,
                });

                return res.status(200).send({ message: "Usuário cadastrado", id });
            }

            else {
                return res.status(400).send({ message: "Usuário já cadastrado" });
            }
        } catch (error) {
        }
    },

    async index(req, res) {
        try {
            const clientes = await connection('clientes').select('*')
            return res.json(clientes);

        } catch (error) {
            return res.status(400).send({ message: "erro" });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, idade, email, telefone, cpf, rg, orgaoEmissor, nomeCarro, anoCarro, marca, numeroPlaca, cidade, uf, bairro, end, numero, cep, complemento } = req.body;
            await connection('clientes').where('id',id).update({ nome, idade, email, telefone, cpf, rg, orgaoEmissor, nomeCarro, anoCarro, marca, numeroPlaca, cidade, uf, bairro, end, numero, cep, complemento })
            return res.status(200).send({ message: "Cliente atualizado com sucesso!" });

        } catch (error) {
            return res.status(400).send({ message: "erro" });
        }
    },

    async delete(req, res){
        try {
            const { id } = req.params;
            await connection('clientes').where('id', id).delete()
            return res.status(200).json({ message: "Usuário deletado" });
        } catch (error) {
            return res.status(400).json({ message: "erro" });
        }
    }
}