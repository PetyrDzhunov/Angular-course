import { Component,Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe! : Recipe
  @Input() id : number;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id'])
      }
    )
  }
}
