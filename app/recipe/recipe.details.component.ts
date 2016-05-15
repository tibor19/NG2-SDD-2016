import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    templateUrl : './app/recipe/recipe.details.component.html'
})
export class RecipeDetailsComponent {
 
    constructor(private router: Router) {
        
    }
    edit(){
        this.router.navigate(['Edit']);
    }
}
