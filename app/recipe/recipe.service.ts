import {Injectable} from 'angular2/core';
import { Http, Response } from 'angular2/http';
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

    constructor(private http: Http){ }

    getRecipes(): Observable<IRecipe[]> {
        return this.http.get('/Artifacts/data/recipies.json')
            .map((response) => <IRecipe[]>response.json())
            .do(r => console.log(JSON.stringify(r)));
    }

    getRecipe(id: number): IRecipe {
        console.log("Got a request for recipe with Id: " + id);
        return {
            "recipeId": 1,
            "name": "Fish sticks and Rice",
            "price": 2.0,
            "time": 20,
            "image": "fishsticks-mine",
            "recipeIngredients": [{
                "recipeIngredientId": 1,
                "ingredient": {
                    "ingredientId": 1,
                    "name": "Fish sticks", "Type": "fish"
                },
                "amount": 2.0,
                "amountType": "Portions of"
            }, {
                    "recipeIngredientId": 2,
                    "ingredient": {
                        "ingredientId": 2,
                        "name": "Rice",
                        "Type": "Pasta"
                    },
                    "amount": 2.0,
                    "amountType": "Portions of"
                }, {
                    "recipeIngredientId": 3,
                    "ingredient": {
                        "ingredientId": 3,
                        "name": "Mayonaise",
                        "Type": "Condiment"
                    },
                    "amount": null,
                    "amountType": null
                }, {
                    "recipeIngredientId": 4,
                    "ingredient": {
                        "ingredientId": 4,
                        "name": "Water",
                        "Type": "Condiment"
                    },
                    "amount": null,
                    "amountType": null
                }, {
                }],
            "recipeInstructions": [{
                "recipeInstructionId": 1,
                "instructionText": "Follow instructions on rice package to make rice"
            }, {
                    "recipeInstructionId": 2,
                    "instructionText": "Fry fish sticks"
                }, {
                    "recipeInstructionId": 3,
                    "instructionText": "Plate and serve with mayo"
                }]
        }
    }
}