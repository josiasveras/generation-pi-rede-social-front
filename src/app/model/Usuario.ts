import { Postagem } from "./Postagem"

export class Usuario{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public genero: string
    public foto: string
    public bio: string
    public tipo: string
    public profissao: string

    public postagem: Postagem[]
}
