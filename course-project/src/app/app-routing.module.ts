import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'recipes',
    loadChildren: () =>
      import("./recipes/recipes.module").then(m => m.RecipesModule),
  },
];

@NgModule({
  imports: [
    // preloading lazy loaded routes >>preloadingStrategy
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
