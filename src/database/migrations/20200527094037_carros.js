exports.up = function(knex) {
  return knex.schema.createTable('carros', function(table){
    table.string('key').primary();
    table.string('nomeCarro').notNullable();
    table.string('anoCarro').notNullable();
    table.string('marca').notNullable();
    table.string('numeroPlaca').notNullable();
    table.string('id_cliente').notNullable();
    table.foreign('id_cliente').references('id').inTable('clientes').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('carros');
};
