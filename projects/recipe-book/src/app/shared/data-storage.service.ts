import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
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
        // const token = this.authServive.getToken();
        /**
         * The line below will be used to add the extra options of the headers Object & params Object respectively
         * ...    {headers: headers}
         * ...    {params: params}
         */
        // const headers = new HttpHeaders().set('Authorization', 'Bearer token123456');
        // const params = new HttpParams().set('auth', token);

        // return this.http.put('https://recipe-book-b18c7.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());

        /**
         * Recording or responding to progress via HTTPRequest:
         * Super useful when working with files (downloading or uploading)
         */
        const request = new HttpRequest('PUT', 'https://recipe-book-b18c7.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
        {reportProgress: true});
        return this.http.request(request);
    }

    getRecipes() {
        // const token = this.authServive.getToken();

        this.http.get<Recipe[]>('https://recipe-book-b18c7.firebaseio.com/recipes.json',
        {observe: 'body', responseType: 'json'} // This line sets extra options
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
