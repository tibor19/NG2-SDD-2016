import {Component, OnInit} from 'angular2/core';
import {ImagePipeTransform} from '../pipes/ImagePipeTransform';
import {IRecipe, RecipeService} from './recipe.service';

@Component({
    moduleId: module.id,
    selector: 'weekly-menu',
    templateUrl: 'weekly-menu.component.html',
    pipes: [ImagePipeTransform],
    providers: [RecipeService]    
})
export class WeeklyMenuComponent implements OnInit {
    
    daysOfWeek = ['Monday', 'Tuesday', 'Wednesday'];
    
    title : string = 'Weekly menu';
    recipes : IRecipe[];

    constructor(private recipeService : RecipeService) {
    }
    
    ngOnInit(){
        
        this.recipes = this.recipeService.getRecipes();
        //         ).map((r: IRecipe, i: number) => {
        //             r.dayOfWeek = this.daysOfWeek[i%this.daysOfWeek.length]; 
        //             return r;
        //         })
    }
    
}