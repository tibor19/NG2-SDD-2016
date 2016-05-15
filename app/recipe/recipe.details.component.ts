import {Component} from 'angular2/core';
import {Router, ComponentInstruction} from 'angular2/router';
import {IRecipe} from './recipe.service';

@Component({
    templateUrl : './app/recipe/recipe.details.component.html'
})
export class RecipeDetailsComponent {
 
    recipe : IRecipe;
    constructor(private router: Router) {
        
    }

    routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
        this.recipe = nextInstruction.routeData['recipe'];
    }
    
    edit(){
        this.router.navigate(['Edit']);
    }
}
