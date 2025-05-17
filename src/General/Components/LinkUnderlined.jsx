import { useState } from 'react';
import { Link } from 'react-router-dom'
import './LinkUnderlined.css';
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';

export default function LinkUnderlined({ display, displayHovered,to, file, scrollTo, normalColor='black' }) {
    const [isHovering, setIsHovering] = useState(false);
    const [needToReturn, setNeedToReturn] = useState(false);
    const [text, setText] = useState(display);
    const isTouch = useIsTouchDevice();

    const handleMouseEnter = () => {
        setIsHovering(true);
        setNeedToReturn(false);
        if (displayHovered) {setText(displayHovered)}
    }
 
    const handleMouseLeave = () => {
        setIsHovering(false);
        setNeedToReturn(true); 
        setText(display);
    }

    const unActivateHover = () => {
        setTimeout(() => {
            setIsHovering(false);
            setNeedToReturn(true); 
            setText(display);
        }, 300);

    }


    const handleClick = () => {
        if (to) {
            window.location.href = to;  // Navigate to the 'to' URL when clicked
        } else if (file) {
            window.open(file, '_blank');  // Open the 'file' link in a new tab
        } else if (scrollTo) {
            window.scrollTo({ top: scrollTo, behavior: "smooth" });
        }
        
    }

    return ( 
        <div 
            className={`link ${isHovering ? 'hover' : ''} ${needToReturn ? 'return' : ''}`} 
            onClick={handleClick}
            onMouseEnter={!isTouch ? handleMouseEnter : undefined}  
            onMouseLeave={!isTouch ? handleMouseLeave : undefined}  
            onTouchStart={isTouch ? handleMouseEnter : undefined}
            onTouchEnd={isTouch ? unActivateHover : undefined}
            onTouchCancel={isTouch ? unActivateHover: undefined} 
            style={{color: isHovering ? '#EFA900' : normalColor}}
        >
            {text}
        </div>
    );
}
