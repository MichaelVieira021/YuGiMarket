import axios, { AxiosResponse } from "axios";

const ApiYugioh = axios.create({
    baseURL: "https://db.ygoprodeck.com/api/v7/"
});

export function getTodasCartas(){
    return ApiYugioh.get("cardinfo.php")
};

export function getPorNome(nome: string): Promise<AxiosResponse<any, any>>{
    return ApiYugioh.get(`?name=${nome}`)
}

export function getPorId(id: string): Promise<AxiosResponse<any, any>>{
    return ApiYugioh.get(`?id=${id}`)
}