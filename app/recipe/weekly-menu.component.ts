import {Component} from 'angular2/core';

interface IRecipe{
    recipeId : number;
    name: string;
    price: number;
    time: number;
    image? : string;
    dayOfWeek? : string;
}

@Component({
    moduleId: module.id,
    selector: 'weekly-menu',
    templateUrl: 'weekly-menu.component.html'    
})
export class WeeklyMenuComponent {
    
    daysOfWeek = ['Monday', 'Tuesday', 'Wednesday'];
    
    title : string = 'Weekly menu';
    
    recipes : IRecipe[] = [{
            "recipeId": 1,
            "name": "Fish sticks and Rice",
            "price": 2.0,
            "time": 20,
            "image": "fishsticks-mine"
        }, {
            "recipeId": 2,
            "name": "Pizza",
            "price": 13.0,
            "time": 30,
            "image": "pizza-clip"
        }, {
            "recipeId": 3,
            "name": "Pasta with Meatsauce",
            "price": 3.0,
            "time": 11,
            "image": "pasta-clip"
        }];

//         ).map((r: IRecipe, i: number) => {
//             r.dayOfWeek = this.daysOfWeek[i%this.daysOfWeek.length]; 
//             return r;
//         })
}