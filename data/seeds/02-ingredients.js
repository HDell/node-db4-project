
exports.seed = function(knex) {
  // Deletes ALL existing entries
    return knex('ingredients').truncate()
        .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
          {ingredient_name: 'Butter'},
          {ingredient_name: 'Unsweetened Chocolate'},
          {ingredient_name: 'White Sugar'},
          {ingredient_name: 'Eggs'},
          {ingredient_name: 'Vanilla Extract'},
          {ingredient_name: 'All-Purpose Flour'},
          {ingredient_name: 'Salt'},
          {ingredient_name: 'Semisweet Chocolate Chips'},
          {ingredient_name: 'Chopped Walnuts'},
          {ingredient_name: 'Oats'},
      ]);
    });
};
