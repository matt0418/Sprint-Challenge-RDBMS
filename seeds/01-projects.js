
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project 1', description: 'description for project 1', completed: false},
        {name: 'project 2', description: 'description for project 2', completed: false},
        {name: 'project 3', description: 'description for project 3', completed: false}
      ]);
    });
};
