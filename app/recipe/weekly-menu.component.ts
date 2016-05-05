import {Component, OnInit} from 'angular2/core';
import {IRecipe, RecipeService} from './recipe.service';

@Component({
    selector: 'weekly-menu',
    templateUrl : './app/recipe/weekly-menu.component.html'
})
export class WeeklyMenuComponent implements OnInit {
    private daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    title = 'Weekly Menu';
    recipes : IRecipe[];
    
    constructor(private recipeService: RecipeService) {
    }
    
    ngOnInit(){
        this.recipes = this.recipeService.getRecipes().map((r, i) => {
            r.dayOfWeek = this.daysOfWeek[i%this.daysOfWeek.length];
            return r;
        });
    }
}