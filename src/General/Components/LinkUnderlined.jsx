import { useState } from 'react';
import { Link } from 'react-router-dom'
import './LinkUnderlined.css';

export default function LinkUnderlined({ display, to, file }) {
    const [isHovering, setIsHovering] = useState(false);
    const [needToReturn, setNeedToReturn] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
        setNeedToReturn(false);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
        setNeedToReturn(true);
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
        >
            {display}
        </div>
    );
}
