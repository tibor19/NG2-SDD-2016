import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {IRecipe, RecipeService} from './recipe.service';
import {ImagePipeTransform} from '../pipes/image';

@Component({
    templateUrl : './app/recipe/recipe.component.html',
    pipes: [ImagePipeTransform]
})
export class RecipeComponent implements OnInit {
    recipe: IRecipe;
    
    constructor(private recipeService: RecipeService, private router: Router) {
    }

    ngOnInit(){
        this.recipe = this.recipeService.getRecipe(1);        
    }
    
    goBack(){
        this.router.navigate(['WeeklyMenu']);
    }
}
