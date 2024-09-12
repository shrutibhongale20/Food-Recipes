import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./Pages/about/about.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HomeComponent } from "./Pages/home/home.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { RecipesComponent } from "./Pages/recipes/recipes.component";
import { SignInComponent } from "./Pages/sign-in/sign-in.component";
import { SubHeaderComponent } from "./component/sub-header/sub-header.component";
import { ListOfRecipesComponent } from "./component/list-of-recipes/list-of-recipes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, HeaderComponent, FooterComponent, HomeComponent, NavBarComponent, RecipesComponent, SignInComponent, SubHeaderComponent, ListOfRecipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Food-Recipes';
}
