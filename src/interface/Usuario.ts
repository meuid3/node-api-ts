export interface UsuarioInterface {
  id?: number,
  usuario: string, 
  nome: string, 
  email: string, 
  skype?: string, 
  discord?: string, 
  telefone?: string, 
  senha: string,
  ativo: boolean
}