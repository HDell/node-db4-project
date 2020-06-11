
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('recipe_name')
            .unique()
            .notNullable();
        tbl.integer('servings');
        tbl.integer('calories');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes');
};
