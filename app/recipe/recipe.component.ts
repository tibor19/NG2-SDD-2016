import {Component} from 'angular2/core';
import {OnActivate, ComponentInstruction, RouteParams} from 'angular2/router';

@Component({
    moduleId: module.id,
    templateUrl : 'recipe.component.html'
})
export class RecipeComponent{
    
    constructor(private routeParams: RouteParams){
        console.log(routeParams.params['id']);
    }
    
    routerOnActivate(nextInstruction : ComponentInstruction, prevInstruction: ComponentInstruction){
        let recipeId = parseInt(nextInstruction.params['id']);
        
        if(recipeId == -1){
            recipeId = Math.floor(Math.random() * 8) + 1;
        }
        
        // Get the recipe
    }
    
}