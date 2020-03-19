import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authServive: AuthService

    ) { }

    storeRecipes() {
        const token = this.authServive.getToken();

        return this.http.put('https://recipe-book-b18c7.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authServive.getToken();

        this.http.get<Recipe[]>('https://recipe-book-b18c7.firebaseio.com/recipes.json?auth=' + token,
        { observe: 'body', responseType: 'json'} // This line sets extra options
        )
            .map(
                (recipes) => {
                    for (const recipe of recipes) {
                        if (!recipe.ingredients) {
                            // console.log(recipes);
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
