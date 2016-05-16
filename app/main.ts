import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AppComponent} from './app.component';
import {RecipeService} from './recipe/recipe.service';
import {DummyService} from './dummy/dummy.service';

bootstrap(AppComponent, [provide(RecipeService, {useClass : DummyService})]);

