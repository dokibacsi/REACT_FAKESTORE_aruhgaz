import React, { useContext } from 'react'
import { KosarContext } from '../../context/KosarContext';
function Termek(props) {

    const { kosarbaRak } = useContext(KosarContext)

    function kosarba() {
        console.log(props.elem)
        const termekObject = 
        {
            "title": props.elem.title,
            "price": props.elem.price
        }
        kosarbaRak(termekObject)
    }

    return (
        <div className='card col-lg-3'>
            <h5 className='card-title'>{props.elem.title}</h5>
            <p className='card-text' >{props.elem.category}</p>
            <img src={props.elem.image} className='card-img-top' />
            <p className='card-text'>{props.elem.description}</p>
            <p className='card-text'>{props.elem.price}</p>
            <button className='btn btn-dark' onClick={kosarba}>Kosárba</button>
        </div>
    )
}

export default Termek