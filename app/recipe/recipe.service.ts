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
}