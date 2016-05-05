import {Component} from 'angular2/core';
import {WeeklyMenuComponent} from './recipe/weekly-menu.component';

@Component({
    selector : 'recipe-app',
    templateUrl : './app/app.component.html',
    directives: [WeeklyMenuComponent],
    styles:[`
        .container {
            width: 620px;
            margin: 0 auto;
            padding: 10px;
            border-right: 2px solid #725972;
            border-bottom: 2px solid #725972;
            border-left: 2px solid #725972;
            background-color: #fff;
            margin-top: 10px;
        }
    `] 
})
export class AppComponent {
    
}