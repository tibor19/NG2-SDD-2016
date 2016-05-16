import {Component} from 'angular2/core';
import {WeeklyMenuComponent} from './recipe/weekly-menu.component';

@Component({
    selector : 'recipe-app',
    templateUrl : './app/app.component.html',
    directives: [WeeklyMenuComponent],
    styleUrls: ['./content/styles.css'] 
})
export class AppComponent {
    
}