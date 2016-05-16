import {Component, OnInit} from 'angular2/core';
import {OnActivate, ComponentInstruction} from 'angular2/router';

import {ImagePipeTransform} from '../pipes/ImagePipeTransform';
import {IRecipe, RecipeService} from './recipe.service';

@Component({
    moduleId: module.id,
    templateUrl: 'weekly-menu.component.html',
    pipes: [ImagePipeTransform]   
})
export class WeeklyMenuComponent implements OnActivate {
    
    daysOfWeek = ['Monday', 'Tuesday', 'Wednesday'];
    
    title : string = 'Weekly menu';
    recipes : IRecipe[];

    constructor(private recipeService : RecipeService) {
    }
    
    routerOnActivate(nextInstruction : ComponentInstruction, prevInstruction: ComponentInstruction){
        
        this.recipes = this.recipeService.getRecipes();
        //         ).map((r: IRecipe, i: number) => {
        //             r.dayOfWeek = this.daysOfWeek[i%this.daysOfWeek.length]; 
        //             return r;
        //         })
    }
    
}