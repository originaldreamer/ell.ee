import { useState, useEffect, useRef } from 'react';
import './PildidGaleriiTile.css'
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';

export default function PildidGaleriiTile({pilt, handleClick}) {
    const [hoverActive, setHoverActive] = useState(false);
    const isTouch = useIsTouchDevice();

    return (
        <div className={`pildidGaleriiTile ${hoverActive ? 'hover' : ''}`} 
            onClick={handleClick}
            onMouseEnter={!isTouch ? () => setHoverActive(true) : undefined} 
            onMouseLeave={!isTouch ? () => setHoverActive(false) : undefined} 
        >
            <img src={pilt} />
        </div>
    );
}   