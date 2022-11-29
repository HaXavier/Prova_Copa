import { Selecao } from "./selecao.model";

export interface Jogo {
  id?: number;
  placarA?: number;
  placarB?: number;
  selecaoA?: Selecao;
  selecaoB?: Selecao;
  criadoEm?: string;
}
