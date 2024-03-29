import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Shnitzel Recipe',
            'Tasty shnitzel',
            'https://4.imimg.com/data4/YY/YY/GLADMIN-/assets-veg-20cutlet_small-500x500.png',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Burger Recipe',
            'Best burger ever!',
            'https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Steak', 1)
            ]),
        new Recipe(
            'Pizza Recipe',
            'Delicious pepperoni pizza',
            'https://upload.wikimedia.org/wikipedia/commons/e/e1/Pepperoni_pizza_%282%29.png',
            [
                new Ingredient('Flour', 1),
                new Ingredient('Pepperoni', 20)
            ]),
    ];

    constructor() {}

    getRecipes() {
        /**
         * Slice returns a section or copy of an array with
         * @param start &
         * @param end
         */
        return this.recipes.slice();

    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

}
