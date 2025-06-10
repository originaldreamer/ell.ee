import { useState, useEffect } from 'react';

import './UudisLehtGaleriiTile.css'
import useIsTouchDevice from '/src/hooks/UseIsTouchDevice.jsx';

export default function UudisLehtGaleriiTile({pilt, handleClick}) {
    const [isHovering, setIsHovering] = useState(false);
    const isTouch = useIsTouchDevice();



    return (
        <div className={`uudisLehtGaleriiTile ${isHovering ? 'hover' : ''}`}
            onClick={handleClick}
            onMouseEnter={!isTouch ? () => setIsHovering(true) : undefined} 
            onMouseLeave={!isTouch ? () => setIsHovering(false) : undefined} 
        >
            <img src={pilt} />
        </div>
    );
}  