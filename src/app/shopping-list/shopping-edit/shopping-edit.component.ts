import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  //@ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
  //@ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editItemIndex:number;
  editedItem:Ingredient;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppingListService.startedEditing
    .subscribe(
      (index:number)=>{
        this.editItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingListService.getIngredient(index);
        this.slForm.setValue(
          {
            name:this.editedItem.name,
            amount:this.editedItem.amount
          }
        )
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(form:NgForm){
    //const ingName=this.nameInputRef.nativeElement.value;
    //const ingAmount=this.amountInputRef.nativeElement.value;
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editItemIndex,newIngredient);
    }else{
      this.shoppingListService.onIngredientAdded(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

}
