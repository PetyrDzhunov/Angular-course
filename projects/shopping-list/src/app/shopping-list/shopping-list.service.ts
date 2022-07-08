import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>()

    private ingredients:Ingredient[] = [
        new Ingredient('tomatoes',4),
        new Ingredient('carrots',2)
      ];

      getIngridients() {
        return this.ingredients.slice();
      }

      getIngredient(index:number) {
        return this.ingredients[index];
      }

      updateIngredient(index:number,newIngredient:Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      addIngridient(ingredient:Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      deleteIngredient(index:number) {
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      addMultipleIngridients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

}