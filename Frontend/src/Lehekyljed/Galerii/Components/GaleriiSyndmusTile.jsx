import { useState, useEffect, useRef } from 'react';
import './GaleriiSyndmusTile.css'
import '../../../index.css';
import useIsTouchDevice from '/src/hooks/UseIsTouchDevice.jsx'

export default function GaleriiSyndmusTile({pilt, title, pildistaja, kuupaev, handleClick}) {
    const [hoverActive, setHoverActive] = useState(false);
    const isTouch = useIsTouchDevice();

    const unActivateHover = () => {
        setTimeout(() => {
            setHoverActive(false);
        }, 400);

    }
    
    return (
        <div className={`galeriiSyndmusTile ${hoverActive ? 'hover' : ''}`} 
            onClick={handleClick}
            onMouseEnter={!isTouch ? () => setHoverActive(true) : undefined} 
            onMouseLeave={!isTouch ? () => setHoverActive(false) : undefined} 
            onTouchStart={isTouch ? () => setHoverActive(true) : undefined}
            onTouchEnd={isTouch ? unActivateHover: undefined}
            onTouchCancel={isTouch ? unActivateHover : undefined} 
        >

            <div className='galeriiSyndmusTile-pilt'>
                <img src={pilt} />
            </div>

            <div className='galeriiSyndmusTile-textid'>
                <div className='normal-sub-header galeriiSyndmusTile-text galeriiSyndmusTile-title'> {title} </div>
                <div className='normal-sub-header galeriiSyndmusTile-text'> pildistas {pildistaja} </div>
                <div className='normal-sub-header galeriiSyndmusTile-text'> {kuupaev} </div>

                
            </div>
             
        </div>
    );
}  