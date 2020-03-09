import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    /**
     * This will only work when we first load the detail component...
     */

    // const id = this.route.snapshot.params['id'];

    /**
     * This is a better approach...
     */

     this.route.params.subscribe(
       (params: Params) => {
         this.id = +params.id;
         this.recipeService.getRecipe(this.id);
       }
     );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});

    /**
     * This is another way (longer) to implement the above line of code...
     */

    //  this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  OnDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }

}
