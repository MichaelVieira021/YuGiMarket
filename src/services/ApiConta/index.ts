import axios, { AxiosResponse } from "axios";

interface UsuarioResponse {
    usuario: {
        email: string;
        senha: string;
    },
};

interface UsuarioRequest {
    nome: string,
    email: string;
    senha: string;
    cash: number,
	cartas: any[],
	deck: any[]
};

const ApiConta = axios.create({
    baseURL: "http://localhost:8086/"
});

export function getTodosUsuarios(){
    return ApiConta.get('usuarios')
};

export function getUsuario(email: string): Promise<AxiosResponse<any, any>>{
    return ApiConta.get(`usuarios?email=${email}`)
}

export function getLoginUsuario(email: string, senha: string): Promise<AxiosResponse<any, any>>{
    return ApiConta.get("usuarios",{params: {email, senha}})
}

export function postNovoUsuario(nome: string, email: string, senha: string, cash: number, cartas: [], deck: []){
    return ApiConta.post("usuarios", {nome, email, senha, cash, cartas, deck}) 
}

export function patchUsuarioCards(id: number, cartas:[]) {
    return ApiConta.patch(`usuarios/${id}`, { cartas });
}

export function postUsuarioCards(id: number,nome: string, email: string, senha: string, cash: number, cartas: number[], deck: number[]){
    return ApiConta.post("usuarios", {id, nome, email, senha, cash, cartas, deck}) 
}