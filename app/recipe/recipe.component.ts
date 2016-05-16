import {Component} from 'angular2/core';
import {OnActivate, ComponentInstruction, RouteParams, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {RecipeDetailsComponent} from './recipe-details.component';
import {RecipeEditComponent} from './recipe-edit.component';
import {RecipeService} from './recipe.service';

@Component({
    moduleId: module.id,
    templateUrl : 'recipe.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {name: 'Details', path:'/', component: RecipeDetailsComponent, useAsDefault : true},
    {name: 'Edit', path:'/edit', component: RecipeEditComponent}
])
export class RecipeComponent{
    
    constructor(private routeParams: RouteParams, private recipeService : RecipeService){
        console.log(routeParams.params['id']);
    }
    
    routerOnActivate(nextInstruction : ComponentInstruction, prevInstruction: ComponentInstruction){
        let recipeId = parseInt(nextInstruction.params['id']);
        
        if(recipeId == -1){
            recipeId = Math.floor(Math.random() * 8) + 1;
        }
        
        this.recipeService.getRecipe(recipeId).then(r=>console.log(r));
        // Get the recipe
    }
    
}