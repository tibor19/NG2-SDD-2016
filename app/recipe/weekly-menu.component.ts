import {Component} from 'angular2/core';

interface IRecipe {
    recipeId: number;
    name: string;
    price: number;
    time: number;
    image: string;
    recipeIngredients: any[];
    recipeInstructions: any[];
}

@Component({
    selector: 'weekly-menu',
    templateUrl : './app/recipe/weekly-menu.component.html' 
})
export class WeeklyMenuComponent{
    title = 'Weekly Menu';
    recipes : IRecipe[] = [{
        "recipeId": 1,
        "name": "Fish sticks and Rice",
        "price": 2.0,
        "time": 20,
        "image": "fishsticks-mine",
        "recipeIngredients": [],
        "recipeInstructions": []
    }, {
        "recipeId": 2,
        "name": "Pizza",
        "price": 13.0,
        "time": 30,
        "image": "pizza-clip",
        "recipeIngredients": [],
        "recipeInstructions": []
    }];
}