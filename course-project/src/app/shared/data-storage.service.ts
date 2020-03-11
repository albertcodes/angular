import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

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
        .subscribe(
            (response: any) => {
                const recipes = response.json();
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
