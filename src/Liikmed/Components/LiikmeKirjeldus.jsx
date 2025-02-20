import { useState } from 'react'
import '../../App.css'
import './LiikmeKirjeldus.css'


//later do from datasheet

import koolimajaPilt from '../Design Elements/MURG liputoimkond.jpg'

function Background()
{
    function handleClick() {

    }
    return (
        <button 
          className='background'
          onClick={handleClick}
        >
          <div>
          
          
          </div>


        </button>
        
    );
}

export default function LiikmeKirjeldus()
{
    return (
        <div>
            <Background />

            <div className='kirjeldus'> 
                <img src={koolimajaPilt} alt={"tere"} width='500px'/>
                <p> TereTTTTTTTTTTTTTTTTTTTTTTTTTT</p>

            </div>

        </div>
        
        
    );
}