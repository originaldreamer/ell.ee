import { useState, useEffect } from 'react';

import './UudisLehtGaleriiTile.css'
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';

export default function UudisLehtGaleriiTile({pilt, handleClick}) {
    const [isHovering, setIsHovering] = useState(false);
    const isTouch = useIsTouchDevice();

    const unActivateHover = () => {
        setTimeout(() => {
            setIsHovering(false);
        }, 300);

    }

    return (
        <div className={`uudisLehtGaleriiTile ${isHovering ? 'hover' : ''}`}
            onClick={handleClick}
            onMouseEnter={!isTouch ? () => setIsHovering(true) : undefined} 
            onMouseLeave={!isTouch ? () => setIsHovering(false) : undefined} 
            onTouchStart={isTouch ? () => setIsHovering(true) : undefined}
            onTouchEnd={isTouch ? unActivateHover: undefined}
            onTouchCancel={isTouch ? unActivateHover: undefined} 
        >
            <img src={pilt} />
        </div>
    );
}  