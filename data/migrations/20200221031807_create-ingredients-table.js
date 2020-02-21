
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('ingredient_name')
            .unique()
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredients');
};
