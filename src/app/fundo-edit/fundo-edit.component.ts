// src/app/fundo-edit/fundo-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FundoService } from '../fundo.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FundoRequest } from '../fundo-request.modrl';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-fundo-edit',
  templateUrl: './fundo-edit.component.html',
  styleUrls: ['./fundo-edit.component.css'],
  standalone: true,
  imports: [
            MatButtonModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatPaginatorModule]
})
export class FundoEditComponent implements OnInit {
  fundoForm: FormGroup;
  codigo!: string;

  constructor(
    private fb: FormBuilder,
    private fundoService: FundoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.fundoForm = this.fb.group({
      codigo: [{ value: '', disabled: true }, Validators.required],
      nome: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      patrimonio: [0, [Validators.required, Validators.min(0)]],
      codigoTipo: [0, Validators.required]
    });
  }



  ngOnInit(): void {
    this.codigo = this.route.snapshot.paramMap.get('codigo')!;
    if (this.codigo) {
      this.loadFundo();
    } else {
      console.error('Código não fornecido.');
    }
  }

  loadFundo(): void {
    this.fundoService.getFundo(this.codigo).subscribe({
      next: (data) => {
        if (data) {
          this.fundoForm.patchValue(data);
        } else {
          console.error('Fundo não encontrado.');
        }
      },
      error: (err) => console.error('Erro ao carregar fundo', err)
    });
  }

  updateFundo(): void {
    if (this.fundoForm.valid) {
      const fundo: FundoRequest = this.fundoForm.value;
      fundo.codigo = this.codigo;
      this.fundoService.updateFundo(fundo).subscribe({
        next: () => {
          console.log('Fundo atualizado com sucesso');
          this.router.navigate(['/fundos']);
        },
        error: (err) => console.error('Erro ao atualizar fundo', err)
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/fundos']);
  }
}
