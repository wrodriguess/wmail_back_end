/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table){
        table.increments('id')

        // Relacionamento entre tabelas
        table.integer('id_sender').references('users.id').notNullable()
        table.integer('id_recipient').references('users.id').notNullable()

        // importante, spam, criado_em, excluido_em, lido
        table.text('subject')
        table.text('body')
        table.boolean('important').defaultTo(false)
        table.boolean('spam').defaultTo(false)
        table.boolean('visualized').defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('deleted_at')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('messages')
};
