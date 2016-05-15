import {bootstrap} from 'angular2/platform/browser';
import {PLATFORM_PIPES, provide} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features

import {ImagePipeTransform} from './pipes/image';

import {AppComponent} from './app.component';
import {RecipeService} from './recipe/recipe.service'

bootstrap(AppComponent,[
                RecipeService, 
                HTTP_PROVIDERS, 
                provide(PLATFORM_PIPES, {useValue: [ImagePipeTransform], multi: true})]);

