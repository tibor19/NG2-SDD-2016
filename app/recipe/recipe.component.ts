import {Component} from 'angular2/core';
import {Router, OnActivate, CanReuse, ComponentInstruction, RouteConfig, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';

import {IRecipe, RecipeService} from './recipe.service';
import {RecipeDetailsComponent} from './recipe.details.component';
import {RecipeEditComponent} from './recipe.edit.component';

@Component({
    moduleId: module.id,
    templateUrl : 'recipe.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/',      name: 'Details',    component: RecipeDetailsComponent, useAsDefault: true },
  { path: '/add',   name: 'Add',        component: RecipeEditComponent },
  { path: '/edit',  name: 'Edit',       component: RecipeEditComponent }
])
@CanActivate(
    (nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) => {
        // let recipeId = +nextInstruction.params['id'];
        // if(recipeId == -1){
        //     return false;    
        // }
        return true;
    }
)
export class RecipeComponent implements OnActivate, CanReuse {
    recipe: IRecipe;
    
    constructor(private recipeService: RecipeService, private router: Router) {
    }

    routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
        let recipeId = +nextInstruction.params['id'];
        if(recipeId == -1){
            recipeId = 1 + Math.floor(Math.random() * 8);
        }
        return this.recipeService.getRecipe(recipeId).toPromise()
        .then(recipe => {
            this.recipe = recipe;
            nextInstruction.routeData['recipe'] = this.recipe;
            return this.recipe;
        });
    }
    
    routerCanReuse(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
        return +nextInstruction.params['id'] != -1;
    }
}
