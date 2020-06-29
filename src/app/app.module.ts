import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { RecipeService } from './recipes/recipe.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [
    BrowserModule,  
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
  
  ],
  providers: [ShoppingListService,RecipeService,
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptorService,
        multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
