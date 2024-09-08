import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FundoService } from '../fundo.service';
import { Fundo } from '../fundo.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Use RouterModule para navegação

@Component({
  selector: 'app-fundo-list',
  templateUrl: './fundo-list.component.html',
  styleUrls: ['./fundo-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule]
})
export class FundoListComponent implements OnInit {
  fundos: Fundo[] = [];
  displayedColumns: string[] = ['codigo', 'nome', 'cnpj', 'patrimonio', 'codigoTipo', 'actions'];
  showExtraContent: boolean = false;

  constructor(private fundoService: FundoService, private router: Router) { }

  ngOnInit(): void {
    this.loadFundos();
  }

  loadFundos(): void {
    this.fundoService.getFundos().subscribe(fundos => {
      this.fundos = fundos;
    });
  }

  editFundo(fundo: Fundo): void {
    this.router.navigate(['./fundo-edit', fundo.codigo]);
  }

  adicionarFundo(): void {
    this.router.navigate(['./fundo-form']);
  }

  deleteFundo(codigo: string): void {
    this.fundoService.deleteFundo(codigo).subscribe(() => {
      this.loadFundos(); // Recarrega a lista após a exclusão
    });
  }
}
