import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FundoService } from '../fundo.service';
import { Fundo } from '../fundo.model';


@Component({
  selector: 'app-fundo-list',
  templateUrl: './fundo-list.component.html',
  styleUrls: ['./fundo-list.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class FundoListComponent implements OnInit {
  fundos: Fundo[] = [];
  displayedColumns: string[] = ['codigo', 'nome', 'cnpj', 'patrimonio', 'codigoTipo'];

  constructor(private fundoService: FundoService) { }

  ngOnInit(): void {
    this.fundoService.getFundos().subscribe(data => {
      this.fundos = data;
    });
  }
}
