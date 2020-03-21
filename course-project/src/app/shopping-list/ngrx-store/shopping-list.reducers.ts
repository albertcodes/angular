import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.model';
import { State } from '@ngrx/store';

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ]
};

export function ShoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {...state, ingredients: [...state.ingredients, action.payload]};

        case ShoppingListActions.ADD_INGREDIENTS:
            return {...state, ingredients: [...state.ingredients, ...action.payload]};

        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = { ...ingredient, ...action.payload.ingredient };
            const ingredients = [...state.ingredients];
            ingredients[action.payload.index] = updatedIngredient;
            return { ...state, ingredients };

        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(action.payload.index, 1);
            return {...state, oldIngredients};

        default:
            return state;
    }
}
