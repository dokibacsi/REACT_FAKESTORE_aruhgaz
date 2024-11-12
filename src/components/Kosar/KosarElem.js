import React from 'react'

function KosarElem(props) {

  return (
    <div className='card'>
        <span className='card-text'>
            Név: {props.elem.title}
        </span>
        <span className='card-text'>
            Ára: {props.elem.price} 
        </span>
    </div>
  )
}

export default KosarElem