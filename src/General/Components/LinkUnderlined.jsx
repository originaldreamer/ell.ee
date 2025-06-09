import { useState } from 'react';
import { Link } from 'react-router-dom'
import './LinkUnderlined.css';
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';

export default function LinkUnderlined({ display, displayHovered,to, file, scrollTo, download, downloadName,normalColor='black' }) {
    const [isHovering, setIsHovering] = useState(false);
    const [needToReturn, setNeedToReturn] = useState(false);
    const [text, setText] = useState(display);
    const isInterractable = (to || file || scrollTo || download);
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
        else if (download) {
            const a = document.createElement('a');
            a.href = download;
            // if you want to suggest a filename:
            if (downloadName) a.download = downloadName;
            else a.download = ''; 
            // trigger click
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        
    }

    return ( 
        <div 
            className={`link ${isHovering ? 'hover' : ''} ${needToReturn ? 'return' : ''}`} 
            onClick={handleClick}
            onMouseEnter={!isTouch ? handleMouseEnter : undefined}  
            onMouseLeave={!isTouch ? handleMouseLeave : undefined}  
            onTouchStart={isTouch && isInterractable ? handleMouseEnter : undefined}
            onTouchEnd={isTouch && isInterractable ? unActivateHover : undefined}
            onTouchCancel={isTouch && isInterractable ? unActivateHover: undefined} 
            style={{color: isHovering ? '#EFA900' : normalColor}}
        >
            {text}
        </div>
    );
}
