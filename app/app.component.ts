import {Component} from 'angular2/core';
import {WeeklyMenuComponent} from './recipe/weekly-menu.component';

@Component({
    moduleId: module.id,
    selector : 'recipe-app',
    templateUrl : 'app.component.html',
    directives: [WeeklyMenuComponent],
    styleUrls: ['app.component.css'] 
})
export class AppComponent {
    
}