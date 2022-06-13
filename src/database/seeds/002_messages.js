/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    {id_sender: 1, id_recipient: 2, subject: 'Reunião de pais e mestres 01/07/2022', body: 'Prezados, favor comparecer a escola javali cansado para a reunião de pais e metres agendada para o dia 01/07/2022 às 14H.', important: true},
    {id_sender: 2, id_recipient: 1, subject: 'Compre com um super descontão', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', spam: true},
    {id_sender: 3, id_recipient: 1, subject: 'Você viu?', body: 'software like Aldus PageMaker including versions of Lorem Ipsum.', visualized: true}
  ]);
};
