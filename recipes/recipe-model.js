const knex = require('knex');
const configOptions = require('../knexfile.js').development;
const db = knex(configOptions);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipe_id) {
    return db("recipes_ingredients as ri")
        .join("ingredients as i", "ri.ingredient_id", "i.id")
        .select("ri.quantity", "ri.unit", "i.ingredient_name")
        .where("recipe_id", recipe_id)
}

function getInstructions(recipe_id) {
    return db('steps as st')
        .join("recipes as re", "re.id", "st.recipe_id")
        .select("st.id", "re.recipe_name", "st.step_number", "st.instructions")
        .where("recipe_id", recipe_id)
        .orderBy("st.step_number", "asc");
}