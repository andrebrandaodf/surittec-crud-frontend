import { Endereco } from './endereco.model';
export interface Clientes{
    id?:   number;
    nome:  string;
    cpf: string;
    endereco: Endereco;
    telefone: string;
    email: string;
}