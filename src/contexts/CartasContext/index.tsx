import React, { createContext, useEffect, useState } from "react";
import { getPorRace, getPorTipo, getTodasCartas } from "../../services/ApiYugioh";
interface ContextProps {
	children: React.ReactNode
}

export const CartasContext = createContext<any>({})

export function CartasContextProvider({children}: ContextProps){
    const [todasCartas, setTodasCartas] = useState([])
    const [todasTipoTrap, setTodasTipoTrap] = useState([])
    const [todasTipoSpell, setTodasTipoSpell] = useState([])
    const [todasTipoDragon, setTodasTipoDragon] = useState([])

    const obterCartas = async () => {
        getTodasCartas().then((response) => {
            setTodasCartas(response.data.data)
        }).catch((Error) => {
            console.log("Tudo errado")
        })

        await buscarTipo("Trap Card", setTodasTipoTrap, "type")
        await buscarTipo("spell card&race=equip", setTodasTipoSpell, "type")
        await buscarTipo("dragon", setTodasTipoDragon, "race")
    }

    const buscarTipo = async (pesquisa: string, state: any, tipo: string) => {
        if(tipo == "type"){
            getPorTipo(pesquisa).then((response) => {
                state(response.data.data)
            }).catch((Error) => {
                console.log(Error)
            })
        }else if(tipo == "race"){
            getPorRace(pesquisa).then((response) => {
                state(response.data.data)
            }).catch((Error) => {
                console.log(Error)
            })
        }
    }

    return (
        <CartasContext.Provider value={{
            todasCartas,
            todasTipoTrap,
            todasTipoSpell,
            todasTipoDragon,
            obterCartas
        }}>
        {children}</CartasContext.Provider>
    )
}