import { useState } from 'react'
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';


import './UudisedTile.css';
import '../../../index.css'



function extractNormalText(sisu) {
  if (typeof sisu === 'string') { 
    return sisu;
  }
  // Render the JSX to HTML
  const renderedContent = renderToStaticMarkup(sisu);

  // Create a DOM parser
  const parser = new DOMParser(); 
  const doc = parser.parseFromString(renderedContent, 'text/html');

  // Extract all elements with class 'normal-text'
  const normalTextElements = doc.querySelectorAll('.normal-text');

  // Map the content to plain text and join them
  const extractedText = Array.from(normalTextElements)
    .map(element => element.textContent.trim())
    .join('\n\n');

  return extractedText;
}

export default function UudisedTile({pilt, date, title, sisu, to}) {
    const [isHovering, setIsHovering] = useState(false);
    const wordLimit = 15;
    const normalText = extractNormalText(sisu);
    const isTouch = useIsTouchDevice();

    const shortenText = (text, limit) => {
        if (!text) return text;

        const words = text.split(' ');
        if (words.length <= limit) return text;

        let shortenedText = words.slice(0, limit).join(' ');

        if (shortenedText[shortenedText.length - 1] === '.' && words.length > limit) {
            shortenedText += ' ' + words[limit];
        }

        return shortenedText + ' ...'; 
    };

    const unActivateHover = () => {
        setTimeout(() => {
        setIsHovering(false);
        }, 400);

    }


    const handleClick = () => {
        window.location.href = to;
    };

    return (
        <div className='UudisedTile-container'
            onMouseEnter={!isTouch ? () => setIsHovering(true) : undefined} 
            onMouseLeave={!isTouch ? () => setIsHovering(false) : undefined} 
            onTouchStart={isTouch ? () => setIsHovering(true) : undefined}
            onTouchEnd={isTouch ? unActivateHover: undefined}
            onTouchCancel={isTouch ? unActivateHover : undefined} 
            onClick={handleClick}
        >
            <div className={`UudisedTile-pilt ${isHovering ? 'hovering' : ''}`}>
                <img src={pilt} />
            </div>

            <div className={`UudisedTile-kirjeldus ${isHovering ? 'hovering' : ''}`}>
                <div className='UudisedTile-date'>{date}</div>

                <div className={`UudisedTile-title ${isHovering ? 'hovering' : ''}`}>{title}</div>

                <div className='UudisedTile-text'>
                    {shortenText(normalText, wordLimit)}

                </div>
            </div>
            
            
            

        </div>
    );
}