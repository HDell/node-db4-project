
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
          {
              recipe_id: 1,
              ingredient_id: 1,
              unit: 'cup',
              quantity: 1
          },
          {
              recipe_id: 1,
              ingredient_id: 2,
              unit: '(1 ounce) squares',
              quantity: 4
          },
          {
              recipe_id: 1,
              ingredient_id: 3,
              unit: 'cups',
              quantity: 2
          },
          {
              recipe_id: 1,
              ingredient_id: 4,
              unit: 'large',
              quantity: 4
          },
          {
              recipe_id: 1,
              ingredient_id: 5,
              unit: 'teaspoon',
              quantity: 1
          },
          {
              recipe_id: 1,
              ingredient_id: 6,
              unit: 'cup',
              quantity: 1
          },
          {
              recipe_id: 1,
              ingredient_id: 7,
              unit: 'pinch',
              quantity: 1
          },
          {
              recipe_id: 1,
              ingredient_id: 8,
              unit: 'cup',
              quantity: 1
          },
          {
              recipe_id: 1,
              ingredient_id: 9,
              unit: 'cup',
              quantity: 1
          },
          {
              recipe_id: 1,
              ingredient_id: 10,
              unit: 'cup',
              quantity: 0.667
          }
      ]);
    });
};
