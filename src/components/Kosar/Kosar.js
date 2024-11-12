import React, { useContext } from 'react'
import KosarElem from './KosarElem'
import { KosarContext } from '../../context/KosarContext';

    

function Kosar() {
    const {KList} = useContext(KosarContext);

    return(
        <>  
            {
                KList.map((elem, index) => {
                    return(<KosarElem elem = {elem} key = {index} index = {index}/>)
                })
            }
        </>
    )
}

export default Kosar