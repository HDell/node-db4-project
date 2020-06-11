
exports.up = function(knex) {
    return knex.schema.createTable('recipes_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes');
        tbl.integer('ingredient_id')
            .notNullable()
            .references('id')
            .inTable('ingredients');
        tbl.text('unit')
            .notNullable();
        tbl.float('quantity')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes_ingredients');
};
