import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailsListComponent } from './cocktails-list/cokctails-list.component';
import { Route, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CocktailDetailsResolver } from './cocktail-details.resolver';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { IngredientDetailsResolver } from './ingredient-details.resolver';
const routes : Route[]=[
  {
    path:'list',
    component : CocktailsListComponent
  },{
    path:'cocktail-details/:id',
    component : CocktailDetailsComponent,
    resolve:{    
      cocktail:CocktailDetailsResolver
    }
  },{
    path:'',
    pathMatch:'full',
    redirectTo:'list'
  },
  {
    path:'ingredients-list',
    component:IngredientsListComponent
  },{
    path:'ingredient-details/:name',
    component:IngredientDetailsComponent,
    resolve:{
      ingredient:IngredientDetailsResolver
    }
  },{
    path:'**',
    component: NotFoundPageComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CocktailDetailsComponent,
    CocktailsListComponent,
    NotFoundPageComponent,
    IngredientsListComponent,
    IngredientDetailsComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
