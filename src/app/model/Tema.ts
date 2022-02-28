import { Postagem } from "./Postagem"

export class Tema{
    public idTema: number
    public servico: string
    public descricao: string

    public postagem: Postagem[]
}
