import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  subscription = Subscription;
  editMode = false;
  editedIndex: number;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.shoppingListService.startEdit.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
