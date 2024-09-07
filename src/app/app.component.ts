import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FundoListComponent } from './fundo-list/fundo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FundoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'case-itau-front';
}
