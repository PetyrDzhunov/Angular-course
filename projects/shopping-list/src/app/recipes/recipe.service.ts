import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new Subject<Recipe>()
    recipesChanged = new Subject<Recipe[]>()

    constructor(private shoppingListService :ShoppingListService) {}

    private recipes : Recipe[] =[
        new Recipe(
          1,
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Ingredient('Meat',1),
          new Ingredient('French Fries',20)
        ]
        ),
        new Recipe(
           2,
          'Big Fat Burger',
          'What else you need to say?',
          'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
          [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
          ]
        )
      ];

      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]) {
        this.shoppingListService.addMultipleIngridients(ingredients);
      }

      getRecipe(id:number) :Recipe {
        return this.recipes.find((r) => r.id === id) || this.getRecipe(1);   
      }

      addRecipe(recipe:Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      
}