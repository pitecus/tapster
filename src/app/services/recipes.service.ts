import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  /**
   * Name of the drinks
   */
  private readonly drinkListJson = [
    'french-75'
  ];

  public list(): string[] {
    return this.drinkListJson;
  }
}
