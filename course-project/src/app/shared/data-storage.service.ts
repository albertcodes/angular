import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()

export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService
    ) { }

    storeRecipes() {
        return this.http.put('https://recipe-book-b18c7.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://recipe-book-b18c7.firebaseio.com/recipes.json')
            .map(
                (response: any) => {
                    const recipes = response.json();
                    for (const recipe of recipes) {
                        if (!recipe.ingredients) {
                            console.log(recipes);
                            recipe.ingredients = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
