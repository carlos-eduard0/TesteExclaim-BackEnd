exports.up = function(knex) {
    return knex.schema.createTable('revisao', function(table){
         table.string('id_revisao').primary();
         table.string('data').notNullable();
         table.string('problema').notNullable();
         table.string('cod').notNullable();
         table.string('id_carro').notNullable();
         table.foreign('id_carro').references('key').inTable('carros').onDelete('CASCADE');
     });
 };
 
 exports.down = function(knex) {
   return knex.schema.dropTable('revisao');
 };
 