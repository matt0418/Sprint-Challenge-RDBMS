
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
      tbl.increments()

      tbl.string('description', 256)
        .notNullable()
      
      tbl.string('notes', 128)
        .notNullable()
    
      tbl.boolean('completed')

      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
