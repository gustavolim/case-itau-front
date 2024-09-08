import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FundoListComponent } from './fundo-list/fundo-list.component';
import { FundoFormComponent } from './fundo-form/fundo-form.component';
import { FundoEditComponent } from './fundo-edit/fundo-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FundoListComponent, FundoFormComponent, FundoEditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'case-itau-front';
}
