import { useState } from 'react'
import '../../../App.css'
import './LiikmeTile.css'
import data from '../Content/liikmeteKirjeldused.json'

import logo from '/Images/Koolide logod/GAG_logo.png'




export default function LiikmeTile({index, handleClick})
{ 
    const [textColor, setTextColor] = useState( '#F5F5F5');
    const content = data[index] || {};

    function handleMouseEnter() {
      setTextColor('#EFA900')
    }

    function handleMouseLeave() {
      setTextColor('#F5F5F5')
    }


    return (
        <button  
          className='liikmetile'
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}  
          onMouseLeave={handleMouseLeave} 
        >
          <div>
            <div className='liikmetile-logo'>
              <img src={content.logo} style={{width: content.logoWidth}}/>
            </div>

            <img src={content.liputoimkonnaPilt}  />
            <div className='liikmetile-title' style={{color: textColor}}> {content.liikmeNimi} </div>

          
          </div> 


        </button>
        
    );
}