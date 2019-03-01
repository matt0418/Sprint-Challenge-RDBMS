
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: 'description for action 1', notes: 'notes for action 1', completed: false},
        {project_id: 1, description: 'description for action 2', notes: 'notes for action 2', completed: false},
        {project_id: 2, description: 'description for action 3', notes: 'notes for action 3', completed: false},
        {project_id: 2, description: 'description for action 4', notes: 'notes for action 4', completed: false},
        {project_id: 3, description: 'description for action 5', notes: 'notes for action 5', completed: false},
        {project_id: 3, description: 'description for action 6', notes: 'notes for action 6', completed: false}
      ]);
    });
};
