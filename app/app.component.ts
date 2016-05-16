import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {WeeklyMenuComponent} from './recipe/weekly-menu.component';
import {RecipeComponent} from './recipe/recipe.component';
import {HomeComponent} from './home.component';

@Component({
    moduleId: module.id,
    selector : 'recipe-app',
    templateUrl : 'app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS], 
    styleUrls: ['app.component.css'] 
})
@RouteConfig([
    {name: 'Home', path: '/', component: HomeComponent, useAsDefault: true},
    {name: 'WeeklyMenu', path: '/weekly-menu', component: WeeklyMenuComponent},
    {name: 'Recipe', path: '/recipe/:id/...', component: RecipeComponent}
])
export class AppComponent {
    
}