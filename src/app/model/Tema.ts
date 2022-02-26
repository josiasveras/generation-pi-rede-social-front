import { Postagem } from "./Postagem"

export class Tema{
    private idTema: number
    private servico: string
    private localizacao: string
    private descricao: string

    private postagem: Postagem[]
}