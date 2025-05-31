import { useState } from 'react'
import '../../../App.css'
import './LiikmeTile.css'
import data from '../Content/liikmeteKirjeldused.json'
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';

import logo from '/Images/Koolide logod/GAG_logo.png'




export default function LiikmeTile({index, handleClick})
{ 
    const [textColor, setTextColor] = useState( '#F5F5F5');
    const content = data[index] || {};
    const isTouch = useIsTouchDevice();
    const [hoverActive, setHoverActive] = useState(false);

    const unActivateHover = () => {
      setTimeout(() => {
        setHoverActive(false);
        setTextColor('#F5F5F5')
      }, 400);

    }

    function handleMouseEnter() {
      setTextColor('#EFA900')
      setHoverActive(true);
    }

    function handleMouseLeave() {
      setTextColor('#F5F5F5')
      setHoverActive(false);
    } 


    return (
        <button  
          className={`liikmetile ${hoverActive ? 'hover' : ''}`} 
          onClick={handleClick}
          onMouseEnter={!isTouch ? handleMouseEnter : undefined} 
          onMouseLeave={!isTouch ? handleMouseLeave : undefined} 
          onTouchStart={isTouch ? handleMouseEnter : undefined}
          onTouchEnd={isTouch ? unActivateHover: undefined}
          onTouchCancel={isTouch ? unActivateHover : undefined}
        > 
          <div>
            <div className='liikmetile-logo'>
              <img src={content.logo} style={{width: content.logoWidth}}/>
            </div>

            <div className='liikmetile-pilt'>
                <img src={content.liputoimkonnaPilt}  />
            </ div>

            
            <div className='liikmetile-title' style={{color: textColor}}> {content.liikmeNimi} </div>

          
          </div> 


        </button>
        
    );
}