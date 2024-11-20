import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: SobreComponent },          // Rota padrão
  { path: 'about', component: SobreComponent },    // Rota para o componente About
  { path: 'contact', component: SobreComponent }
];
