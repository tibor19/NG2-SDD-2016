import {Component, OnInit} from 'angular2/core';
import {ImagePipeTransform} from '../pipes/ImagePipeTransform';
import {IRecipe, RecipeService} from './recipe.service';

@Component({
    moduleId: module.id,
    selector: 'weekly-menu',
    templateUrl: 'weekly-menu.component.html',
    pipes: [ImagePipeTransform]    
})
export class WeeklyMenuComponent implements OnInit {
    
    daysOfWeek = ['Monday', 'Tuesday', 'Wednesday'];
    
    title : string = 'Weekly menu';
    recipes : IRecipe[];
    constructor() {
    }
    
    ngOnInit(){
        let svc = new RecipeService();
        this.recipes = svc.getRecipes();
    }
    
//         ).map((r: IRecipe, i: number) => {
//             r.dayOfWeek = this.daysOfWeek[i%this.daysOfWeek.length]; 
//             return r;
//         })
}