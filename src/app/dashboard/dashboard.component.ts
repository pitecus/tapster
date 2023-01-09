import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../services/recipe';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public list?: Recipe[] = [];

  public constructor(recipesService: RecipesService, httpClient: HttpClient) {
    // Listen for error messages// Loop through the drink list
    recipesService
      .list()
      .forEach(drinkJson => {
        httpClient.get<Recipe>(`/assets/${drinkJson}.json`)
          .subscribe({
            next: (list) => this.list?.push(list)
          })
      })
  }
}
