
exports.up = function(knex) {
  // data,nome, valor, pgt, entrega
    return knex.schema.createTable('client', function(table){
        table.increments();
        table.string('date').notNullable();
        table.string('name').notNullable();
        table.decimal('value', 2).notNullable();
        table.string('payment').notNullable();
        table.string('delivery').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('client');
};
