import {Component} from 'angular2/core';
import {Router, OnActivate, CanReuse, ComponentInstruction, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IRecipe, RecipeService} from './recipe.service';
import {RecipeDetailsComponent} from './recipe.details.component';
import {RecipeEditComponent} from './recipe.edit.component';
import {ImagePipeTransform} from '../pipes/image';

@Component({
    templateUrl : './app/recipe/recipe.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [ImagePipeTransform]
})
@RouteConfig([
  { path: '/', name: 'Details', component: RecipeDetailsComponent },
  { path: '/edit', name: 'Edit', component: RecipeEditComponent }    
])
export class RecipeComponent implements OnActivate, CanReuse {
    recipe: IRecipe;
    
    constructor(private recipeService: RecipeService, private router: Router) {
    }

    routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
        let recipeId = +nextInstruction.params['id'];
        if(recipeId == -1){
            recipeId = 1 + Math.floor(Math.random() * 8);
        }
        this.recipe = this.recipeService.getRecipe(recipeId);        
    }
    
    routerCanReuse(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
        return +nextInstruction.params['id'] != -1;
    }
    
    goBack(){
        this.router.navigate(['WeeklyMenu']);
    }
}
