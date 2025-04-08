import { useState } from 'react';
import { Link } from 'react-router-dom'
import './LinkUnderlined.css';

export default function LinkUnderlined({ display, displayHovered,to, file, normalColor='black' }) {
    const [isHovering, setIsHovering] = useState(false);
    const [needToReturn, setNeedToReturn] = useState(false);
    const [text, setText] = useState(display);

    const handleMouseEnter = () => {
        setIsHovering(true);
        setNeedToReturn(false);
        if (displayHovered) {setText(displayHovered)}
    }
 
    const handleMouseLeave = () => {
        setIsHovering(false);
        setNeedToReturn(true); 
        setText(display)
    }


    const handleClick = () => {
        if (to) {
            window.location.href = to;  // Navigate to the 'to' URL when clicked
        } else if (file) {
            window.open(file, '_blank');  // Open the 'file' link in a new tab
        }
    }

    return (
        <div 
            className={`link ${isHovering ? 'hover' : ''} ${needToReturn ? 'return' : ''}`} 
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{color: isHovering ? '#EFA900' : normalColor}}
        >
            {text}
        </div>
    );
}
