import { createContext, useEffect, useState } from "react";
import { TermekLista } from "../datas/lists";
import { myAxios } from "./MyAxios";

export const APIContext = createContext(""); 


export const APIProvider = ({ children }) => {
   
    /* const { kosarStateList, setKosarLista } = useState(KosarLista); */
    const [ PList, setProductsList ] = useState(TermekLista);
    const [ CList, setCategoryList ] = useState(TermekLista);
    
    const getAdat = async (vegpont, callback) => {
        try{
            const response = await myAxios.get(vegpont);
            callback(response.data)
            console.log(response.data)
        }catch(err){
            console.log("Hiba történt az adat fingásakor!", err)
        }finally{
            console.log(":)")
        }
        
    }

    const postAdat = async (vegpont, adat) => {
        try{
            const response = await myAxios.post(vegpont, adat);
            console.log(response.data)
        }catch(err){
            console.log("Hiba történt az adat küldésekor!", err)
        }finally{
            console.log(":)")
        }
        
    }

    useEffect(() => {
        getAdat("/products", setProductsList)
        getAdat("/products/categories", setCategoryList)
    }, [])
    return (<APIContext.Provider value={{PList, CList, postAdat}}>{children}</APIContext.Provider>)
}