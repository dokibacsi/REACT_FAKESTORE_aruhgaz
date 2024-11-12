import { useContext } from "react";
import Termek from "./Termek";
import { APIContext } from "../../context/APIContext";

export default function Termekek(){

    const {PList} = useContext(APIContext);

    return(
        <>  
            {
                PList.map((elem, index) => {
                    return(<Termek elem = {elem} key = {index} index = {index}/>)
                })
            }
        </>
    )
}