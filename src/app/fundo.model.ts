// src/app/fundo.model.ts

export interface TipoFundo {
  nome: string;
}

export interface Fundo {
  codigo: string;
  nome: string;
  cnpj: string;
  patrimonio: number;
  codigoTipo: number;
  tipoFundo: TipoFundo;
}
