import {Component} from 'angular2/core';
import {SecondComponent} from './second.component';

@Component({
    moduleId: module.id,
    selector : 'recipe-app',
    templateUrl : 'app.component.html',
    directives: [SecondComponent] 
})
export class AppComponent {
    
}