import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import{Recipe} from '../recipes/recipe.model';
import{map, tap,take, exhaustMap} from 'rxjs/operators';
import { AuthService } from '../auth/auth.servicE';

@Injectable({providedIn:'root'})
export class DataStorageService{
 constructor(private http:HttpClient,private recipeServices:RecipeService,private authService:AuthService){}
    storeRecipes(){
     const recipes=this.recipeServices.getRecipes();
        this.http.put('https://recipe-app-f02e8.firebaseio.com/recipes.json',recipes)
        .subscribe(response=>{
        console.log(response);
             })
    }

    fetchRecipes(){       
         return this.http.get<Recipe[]>('https://recipe-app-f02e8.firebaseio.com/recipes.json').pipe(map(recipes=>{
            return recipes.map(recipe=>{
               return{
                ...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]
               };
            });
         }),
         tap(recipes=>{
          this.recipeServices.setRecipes(recipes);
         }));        
    }
}