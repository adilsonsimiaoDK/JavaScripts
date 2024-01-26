import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  try {
    // Loading recipe

    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status}) `);

    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      title: recipe.title,
      sourceUrl: recipe.source_url,
      cookTime: recipe.cooking_time,
    };
    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};
