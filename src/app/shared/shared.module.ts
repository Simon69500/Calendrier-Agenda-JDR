import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importe et exporte tous les composants, pipes et directives nécessaires
//  Lorsque tu as besoin de ces composants ou pipes dans un autre module
// Cela me permet d'appeler directement un composants que j'ai besoin avec shared.module.ts , une fois appelé je veux importer mes composants que je veux comme le app-headet etc...
// je n'ai pas besoin d'appeler un par un mes composants car ils sont tous regroupés . 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
