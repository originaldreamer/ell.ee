import { useState } from 'react'
import '../../App.css'
import './LiikmeTile.css'
import data from '../Content/liikmeteKirjeldused.json'





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
            <img src={content.liputoimkonnaPilt}  />
            <div className='title' style={{color: textColor}}> {content.liikmeNimi} </div>
          
          
          </div>


        </button>
        
    );
}