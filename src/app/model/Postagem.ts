import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public idPostagem: number
    public titulo: string
    public conteudo: string
    public valor: number
    public proposta: string

    public usuario: Usuario
    public tema: Tema

}