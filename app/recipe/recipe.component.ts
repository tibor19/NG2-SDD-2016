import {Component} from 'angular2/core';
import {Router, OnActivate, CanReuse, ComponentInstruction} from 'angular2/router';

import {IRecipe, RecipeService} from './recipe.service';
import {ImagePipeTransform} from '../pipes/image';

@Component({
    templateUrl : './app/recipe/recipe.component.html',
    pipes: [ImagePipeTransform]
})
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
