import {Component} from 'angular2/core';
import {SecondComponent} from './second.component'

@Component({
    selector : 'recipe-app',
    templateUrl : './app/app.component.html',
    directives: [SecondComponent] 
})
export class AppComponent {
    
}