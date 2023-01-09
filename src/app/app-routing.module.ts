import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  // Dashboard
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  // Recipes
  {
    component: RecipesComponent,
    path: 'recipes'
  },
  // Default path
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // Page not found
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
