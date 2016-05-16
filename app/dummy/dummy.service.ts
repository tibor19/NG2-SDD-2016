import {IRecipe} from '../recipe/recipe.service';

export class DummyService {

    getRecipes(): IRecipe[] {
        
        console.log('Dummy call');
        return null;
    }
}