import { useState } from 'react'
import '../../App.css'
import './LiikmeTile.css'

//later do from datasheet




export default function LiikmeTile({pilt, pildikirjeldus, title, handleClick})
{ 

    function handleMouseEnter() {

    }

    function handleMouseLeave() {

    }


    return (
        <button 
          className='liikmetile'
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}  
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <img src={pilt} alt={pildikirjeldus} />
            <div className='title'> {title} </div>
          
          
          </div>


        </button>
        
    );
}