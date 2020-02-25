import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients() {
          /**
           * Which slice, this returns a copy of the ingredients array
           */
          return this.ingredients.slice();
      }
}
