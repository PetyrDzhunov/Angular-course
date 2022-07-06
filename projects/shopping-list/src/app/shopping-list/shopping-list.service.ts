import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>()

    private ingredients:Ingredient[] = [
        new Ingredient('tomatoes',4),
        new Ingredient('carrots',2)
      ];

      getIngridients() {
        return this.ingredients.slice();
      }

      addIngridient(ingredient:Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      addMultipleIngridients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

}