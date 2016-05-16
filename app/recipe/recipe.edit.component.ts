import {Component} from 'angular2/core';
import {Router, ComponentInstruction} from 'angular2/router';
import {IRecipe, RecipeService} from './recipe.service';

@Component({
    moduleId: module.id,
    templateUrl : 'recipe.edit.component.html'
})
export class RecipeEditComponent {
    recipe : IRecipe;
    originalRecipe: IRecipe;
    
    constructor(private router: Router, private recipeService: RecipeService) {
        
    }
    routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
        this.originalRecipe = nextInstruction.routeData['recipe'];
        this.recipe = Object.assign({}, this.originalRecipe);
    }
    
    save(){
        this.recipeService.saveRecipe(this.recipe).toPromise();
    }
    
    cancel(){
        this.router.navigate(['Details']);
    }
    
}
