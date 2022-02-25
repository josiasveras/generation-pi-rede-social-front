import { Postagem } from "./Postagem"

export class Usuario{
    public idUsuario: number
    public nome: string
    public email: string
    public senha: string
    public genero: string
    public foto: string
    public bio: string
    public tipo: string

    public postagem: Postagem[]
}