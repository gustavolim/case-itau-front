import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FundoService } from '../fundo.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FundoRequest } from '../fundo-request.modrl';

@Component({
  selector: 'app-fundo-form',
  templateUrl: './fundo-form.component.html',
  styleUrls: ['./fundo-form.component.css'],
  standalone: true,
  imports: [CommonModule,
            MatButtonModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule]
})
export class FundoFormComponent implements OnInit {
  fundoForm: FormGroup;
  //tiposFundo: string[] = ['Tipo1', 'Tipo2', 'Tipo3']; // Substitua com seus tipos reais

  constructor(
    private fb: FormBuilder,
    private fundoService: FundoService,
    private router: Router
  ) {
    this.fundoForm = this.fb.group({
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      patrimonio: [0, [Validators.required, Validators.min(0)]],
      codigoTipo: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    // Opcional: carrega dados iniciais, se necessário
  }

  saveFundo(): void {
    if (this.fundoForm.valid) {
      const fundo: FundoRequest = this.fundoForm.value;
      this.fundoService.addFundo(fundo).subscribe({
        next: (response) => {
          // Navegar ou mostrar mensagem após sucesso
          console.log('Fundo salvo com sucesso', response);
          this.router.navigate(['/fundos']); // Navega para a lista de fundos, ajuste conforme necessário
        },
        error: (err) => {
          // Lógica para tratar erros
          console.error('Erro ao salvar fundo', err);
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/fundos']); // Navega para a lista de fundos ou outra página, ajuste conforme necessário
  }
}
