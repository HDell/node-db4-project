
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
          {
              step_number: 1,
              instructions: 'Preheat oven to 350 degrees F (175 degrees C). Spray a 9x13-inch baking dish with cooking spray.',
              recipe_id: 1
          },
          {
              step_number: 2,
              instructions: 'Melt butter and unsweetened chocolate together in the top of a double boiler over simmering water, stirring frequently and scraping down the sides with a rubber spatula to avoid scorching. Remove from heat and pour chocolate mixture into a bowl.',
              recipe_id: 1
          },
          {
              step_number: 3,
              instructions: 'Mix sugar, eggs, and vanilla extract into chocolate mixture using a fork. Stir flour and salt into chocolate mixture until batter is smooth; fold in chocolate chips, walnuts, and oats. Pour batter into the prepared baking dish.',
              recipe_id: 1
          },
          {
              step_number: 4,
              instructions: 'Bake in the preheated oven until brownies are beginning to pull away from sides and middle is done, 25 to 30 minutes. Cool before cutting.',
              recipe_id: 1
          },
      ]);
    });
};
