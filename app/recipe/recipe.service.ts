import {Injectable} from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';


export interface IRecipe {
    recipeId: number;
    name: string;
    price: number;
    time: number;
    image: string;
    dayOfWeek?: string;
    recipeIngredients?: any[];
    recipeInstructions?: any[];
}
@Injectable()
export class RecipeService {

    private url = 'http://localhost:63148/api/Recipes/';
    constructor(private http: Http){ }

    getRecipes(): Observable<IRecipe[]> {
        return this.http.get(this.url)
            .map((response) => <IRecipe[]>response.json())
            .do(r => console.log(JSON.stringify(r)));
    }
    
    saveRecipe(recipe: IRecipe) : Observable<IRecipe>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8')
        if(recipe.recipeId == 0){
            return this.http
                       .post(this.url, JSON.stringify(recipe), {headers})
                       .map(r => r.json());
        }
        else{
            return this.http
                       .put(this.url + recipe.recipeId, JSON.stringify(recipe), {headers})
                       .map(r => r.json());
        }
    }

    getRecipe(id: number): Observable<IRecipe> {
        return this.http.get(this.url + id)
            .map((response) => <IRecipe>response.json())
            .do(r => console.log(JSON.stringify(r)));
    }
}