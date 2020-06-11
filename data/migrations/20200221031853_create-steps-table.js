
exports.up = function(knex) {
    return knex.schema.createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number')
            .notNullable();
        tbl.text('instructions');
        tbl.integer('recipe_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('steps');
};
