import {Component} from 'angular2/core';
import {OnActivate, ComponentInstruction, CanDeactivate, CanActivate} from 'angular2/router';

@Component({
    moduleId: module.id,
    templateUrl: 'recipe-edit.component.html'
})
@CanActivate(RecipeEditComponent.CanActivate)
export class RecipeEditComponent implements CanDeactivate {

    static CanActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {
        return true;
    }
    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {

        return true;
    }


}