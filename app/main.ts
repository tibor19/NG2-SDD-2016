import {bootstrap} from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features

import {AppComponent} from './app.component';
import {RecipeService} from './recipe/recipe.service'

bootstrap(AppComponent,[RecipeService, HTTP_PROVIDERS]);

