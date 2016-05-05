import {Component} from 'angular2/core';

interface IRecipe {
    recipeId: number;
    name: string;
    price: number;
    time: number;
    image: string;
    dayOfWeek: string;
}

@Component({
    selector: 'weekly-menu',
    templateUrl : './app/recipe/weekly-menu.component.html' 
})
export class WeeklyMenuComponent{
    private daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    title = 'Weekly Menu';
    recipes : IRecipe[] = [{
        "recipeId": 1,
        "name": "Fish sticks and Rice",
        "price": 2.0,
        "time": 20,
        "image": "fishsticks-mine",
        "dayOfWeek": ""
    }, {
        "recipeId": 2,
        "name": "Pizza",
        "price": 13.0,
        "time": 30,
        "image": "pizza-clip",
        "dayOfWeek": ""
    }].map((r, i) => {
        r.dayOfWeek = this.daysOfWeek[i%this.daysOfWeek.length];
        return r;
    });
}