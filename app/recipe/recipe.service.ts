import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Observable} from 'rxjs';

export interface IRecipe {
    recipeId: number;
    name: string;
    price: number;
    time: number;
    image?: string;
    dayOfWeek?: string;
}

@Injectable()
export class RecipeService {
    
    constructor(private http: Http){
        
    }

    getRecipes(): Promise<IRecipe[]> {
        return this.http.get('/Artifacts/data/recipies.json')
            .map(r => r.json()).toPromise();
    }
    
    getRecipe(id: number): Promise<IRecipe[]> {
        console.log(id);
        return this.http.get('/Artifacts/data/recipe.json')
            .map(r => r.json()).toPromise();
    }
    
    saveRecipe(recipe : IRecipe) : Promise<IRecipe>{
        // remember to call subsacribe or to call to promise
        //  in order to trigger the http call
        if(recipe.recipeId > 0){
            return this.http.put('url with id', JSON.stringify(recipe))
                .map(r=>r.json()).toPromise();
        }
        else{
            return this.http.post('url without id', JSON.stringify(recipe))
                .map(r=>r.json()).toPromise();
            
        }
    }
}