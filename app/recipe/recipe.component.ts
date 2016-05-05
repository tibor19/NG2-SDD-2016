import {Component, OnInit} from 'angular2/core';
import {IRecipe, RecipeService} from './recipe.service';
import {ImagePipeTransform} from '../pipes/image';

@Component({
    templateUrl : './app/recipe/weekly-menu.component.html',
    pipes: [ImagePipeTransform]
})
export class RecipeComponent implements OnInit {
    recipe: IRecipe;
    
    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(){
        this.recipe = this.recipeService.getRecipe(1);        
    }
}
