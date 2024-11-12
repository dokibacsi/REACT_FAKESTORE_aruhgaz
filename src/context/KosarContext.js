import { createContext, useState } from "react";
import { KosarLista } from "../datas/lists";



export const KosarContext = createContext("");

export const KosarProvider = ({children}) => {

    const [ KList, setKosarLista ] = useState(KosarLista);

    function kosarbaRak(obj){
        const kosarUjLista = [...KList]
        kosarUjLista.push(obj)
        setKosarLista(kosarUjLista)
    }

    return (<KosarContext.Provider value={{KList, kosarbaRak}}>{children}</KosarContext.Provider>)
}