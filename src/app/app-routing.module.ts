import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component'; // HomeComponent pour la route par défaut

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut (page d'accueil)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes
  exports: [RouterModule] // Export du RouterModule pour le rendre disponible
})
export class AppRoutingModule { }
