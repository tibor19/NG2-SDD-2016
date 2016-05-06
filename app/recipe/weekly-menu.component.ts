import {Component, OnInit} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {IRecipe, RecipeService} from './recipe.service';
import {ImagePipeTransform} from '../pipes/image';

@Component({
    templateUrl : './app/recipe/weekly-menu.component.html',
    pipes: [ImagePipeTransform],
    directives: [ROUTER_DIRECTIVES]
})
export class WeeklyMenuComponent implements OnInit {
    private daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    title = 'Weekly Menu';
    recipes : IRecipe[];
    
    constructor(private recipeService: RecipeService) {
    }
    
    ngOnInit(){
        this.recipeService.getRecipes()
            .subscribe(recipes => this.recipes = recipes.map((r, i) => {
                r.dayOfWeek = this.daysOfWeek[i%this.daysOfWeek.length];
                return r;
            }));
    }
}