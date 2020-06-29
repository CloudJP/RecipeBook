import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{
    //recipeSelected=new EventEmitter<Recipe>();
    recipesChanged=new Subject<Recipe[]>();
    private recipes: Recipe[]=[
        /* new Recipe('Pasta Recipe',
        'Pasta',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
        [
            new Ingredient('Meat',2),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Another Pasta Recipe',
        'Another Pasta',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
        [
            new Ingredient('Cheese',10),
            new Ingredient('Fries',10)
        ])  */   
      ];

      constructor(private slService:ShoppingListService){

      }
    getRecipes(){
        //to get the replicated version of recipe array
        //changes here won't modify in the original array
        return this.recipes.slice();
    }     

    getRecipe(id:number){
        return this.recipes[id];
    }
    
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}
