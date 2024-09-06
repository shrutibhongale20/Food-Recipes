import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { RecipesComponent } from './Pages/recipes/recipes.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"recipes",component:RecipesComponent},
    {path:"sign-in",component:SignInComponent}
];
