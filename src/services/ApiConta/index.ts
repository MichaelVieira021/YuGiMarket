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
	cartas: cartaType[],
	deck: cartaType[]
};

export interface cartaType {
    id: number,
    name: string,
    type: string,
    desc: string,
    preco: number,
    img: string
};

const ApiConta = axios.create({
    baseURL: "http://localhost:8086/"
});

export function getTodosUsuarios(){
    return ApiConta.get('usuarios')
};

export function getUsuario(email: string): Promise<AxiosResponse<any, any>>{
    return ApiConta.get(`usuarios?email=${email}`)
};

export function getLoginUsuario(email: string, senha: string): Promise<AxiosResponse<any, any>>{
    return ApiConta.get("usuarios",{params: {email, senha}})
};

export function postNovoUsuario(nome: string, email: string, senha: string, cash: number, cartas: cartaType[], deck: cartaType[]){
    return ApiConta.post("usuarios", {nome, email, senha, cash, cartas, deck}) 
};

export function patchUsuarioCards(id: number, cartas:cartaType[]) {
    return ApiConta.patch(`usuarios/${id}`, { cartas });
};

export function patchUsuarioDeck(id: number, deck:cartaType[]) {
    return ApiConta.patch(`usuarios/${id}`, { deck });
};

export function patchUsuarioCash(id: number, cash:number) {
    return ApiConta.patch(`usuarios/${id}`, {cash} );
};
