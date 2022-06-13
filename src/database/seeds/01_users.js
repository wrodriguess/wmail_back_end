/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {name: 'Maria do Bairro', email: 'maria.xyz@gmail.com', password: 'abc'},
    {name: 'Cirillo Martins', email: 'cirillo.martins@hotmail.com', password: 'senha'},
    {name: 'Ana Doriana', email: 'aninha@outlook.com', password: 'ana'}
  ]);
};
