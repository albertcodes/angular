import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A Test Recipe', 'This is a test recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

      getRecipes() {
          /**
           * Slice returns a section of an array with
           * @param start &
           * @param end
           */
          return this.recipes.slice();

    }

}
