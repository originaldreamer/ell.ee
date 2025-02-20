import { useState } from 'react'
import '../../App.css'
import './liikmeTile.css'

//later do from datasheet




export default function LiikmeTile({pilt, pildikirjeldus, title})
{
    function handleMouseEnter() {

    }

    function handleMouseLeave() {

    }

    function handleClick() {

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