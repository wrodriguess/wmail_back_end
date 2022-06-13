/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id')
        table.text('name').notNullable()
        table.text('email').unique().notNullable()
        table.text('password').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('deleted_at')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
