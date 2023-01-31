exports.seed = async function (knex) {
  await knex.schema.withSchema('public').createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('password');
    table.timestamps(true, true);
  });

  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'chris', password: 'test' },
        { id: 2, name: 'cam', password: 'test' },
      ]);
    });
};
