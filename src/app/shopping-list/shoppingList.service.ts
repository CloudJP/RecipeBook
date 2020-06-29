//import {EventEmitter} from '@angular/core';
import{Subject} from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService{
    //ingredientChanged=new EventEmitter<Ingredient[]>();
    ingredientChanged=new Subject<Ingredient[]>();
    startedEditing=new Subject<number>();
    private ingredients : Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
      return this.ingredients[index];
    }

    onIngredientAdded(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        //this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
    
      }

    addIngredients(ingredients:Ingredient[]){
      //For loop will create multiple events which is only the downside of it...Otherwise we can use this
      /* for(let ingredient of ingredients){
        this.addIngredients(ingredients);
      } */
      //Push method will convert list of arrays to list of strings
      //It saves all the data and emit the event
      //...(3 dots to push multiple array to list)
      this.ingredients.push(...ingredients);
      //this.ingredientChanged.emit(this.ingredients.slice());
      this.ingredientChanged.next(this.ingredients.slice());
    }
    updateIngredient(index:number,newIngredient:Ingredient){
      this.ingredients[index]=newIngredient;
      this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}