import Ingredient from  './ingredient.js';
import Recipe from './recipe.js';

let ingredients = [];

let ingredient1 = new Ingredient(4, "dl", "vand");
let ingredient2 = new Ingredient(25, "g", "gær");
let ingredient3 = new Ingredient(1, "tsk", "salt");
let ingredient4 = new Ingredient(100, "g", "5-korns blanding");
let ingredient5 = new Ingredient(350, "g", "ris, kogte");
let ingredient6 = new Ingredient(375, "g", "hvedemel");
let ingredient7 = new Ingredient(1, "spsk", "honning");

ingredients.push(ingredient1);
ingredients.push(ingredient2);
ingredients.push(ingredient3);
ingredients.push(ingredient4);
ingredients.push(ingredient5);
ingredients.push(ingredient6);
ingredients.push(ingredient7);

let recipe = new Recipe("Hjemmebate boller med ris", "This bitch lit", "../Images/boller.jpg", "10 timer", "20 min", "3 dage", 14, true, ingredients, "Do shit like this");

console.log(recipe);



function createRecipeListItems() {
    let recipeList = document.querySelector("#recipe-list");
    let recipeListItem = recipeList.querySelector(".recipelistitem")
    let newRLI = recipeListItem.cloneNode(true);
    console.log(newRLI );
    newRLI.querySelector("#recipe1desc").textContent = recipe.description;

    recipeList.appendChild(newRLI);
}

window.load = createRecipeListItems();