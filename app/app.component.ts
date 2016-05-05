import {Component} from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {WeeklyMenuComponent} from './recipe/weekly-menu.component';
import {RecipeComponent} from './recipe/recipe.component';
import {HomeComponent} from './home.component';

@Component({
    selector : 'recipe-app',
    templateUrl : './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
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
@RouteConfig([
  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/weekly-menu', name: 'WeeklyMenu', component: WeeklyMenuComponent },
  { path: '/recipe/:id', name: 'Recipe', component: RecipeComponent }    
])
export class AppComponent {
    
}