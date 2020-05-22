exports.up = function(knex) {
   return knex.schema.createTable('clientes', function(table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('idade').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('cpf').notNullable();
        table.string('rg').notNullable();
        table.string('orgaoEmissor').notNullable();
        table.string('nomeCarro').notNullable();
        table.string('anoCarro').notNullable();
        table.string('marca').notNullable();
        table.string('numeroPlaca').notNullable();
        table.string('cidade').notNullable();
        table.string('uf').notNullable();
        table.string('bairro').notNullable();
        table.string('end').notNullable();
        table.string('numero').notNullable();
        table.string('cep').notNullable();
        table.string('complemento').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clientes');
};
