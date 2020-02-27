import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
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

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        /**
         * Slice returns a section of an array with
         * @param start &
         * @param end
         */
        return this.recipes.slice();

    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);

    }

}
