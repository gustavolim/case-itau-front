import { Routes } from '@angular/router';
import { FundoListComponent } from './fundo-list/fundo-list.component';
import { FundoEditComponent } from './fundo-edit/fundo-edit.component';
import { FundoFormComponent } from './fundo-form/fundo-form.component';

export const routes: Routes = [
  { path: '', component: FundoListComponent },
  { path: 'fundo-edit/:codigo', component: FundoEditComponent },
  { path: 'fundo-form', component: FundoFormComponent },
  { path: '**', redirectTo: '' }  // Redireciona para a página principal em caso de rota não encontrada
];
