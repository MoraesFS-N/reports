
exports.up = function(knex) {
  // data,nome, valor, pgt, entrega
    return knex.schema.createTable('clientes', function(table){
        table.increments();
        table.date('data').notNullable();
        table.string('nome').notNullable();
        table.decimal('valor').notNullable();
        table.string('formaPgt').notNullable();
        table.string('formaEtrg').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
};
