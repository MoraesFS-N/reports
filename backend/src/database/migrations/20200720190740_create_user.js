
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.number('password').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
