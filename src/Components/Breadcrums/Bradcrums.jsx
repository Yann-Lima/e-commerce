import React from 'react'
import './Bradcrums.css'
import arrow_icons from '../Assets/breadcrum_arrow.png'

 const Bradcrums = (props) => {
    const{product} = props;
  return (
    <div className='bradcrum'>
        HOME <img src={arrow_icons} alt="" /> SHOP <img src={arrow_icons} alt="" />{product.category}
        <img src={arrow_icons} alt="" />{product.name}
    </div>
  )
}


export default Bradcrums