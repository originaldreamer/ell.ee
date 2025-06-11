import { useState } from 'react'
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import useIsTouchDevice from '/src/hooks/UseIsTouchDevice.jsx';


import './UudisLehtBigTile.css';
import '../../../index.css'

//imported images
import otherUudis1 from '../Content/other uudis 1.jpg';


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

export default function UudisLehtBigTile({pilt, date, title, sisu, to}) {
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
        <div className='UudisLehtBigTile-container'
            onMouseEnter={!isTouch ? () => setIsHovering(true) : undefined} 
            onMouseLeave={!isTouch ? () => setIsHovering(false) : undefined} 
            
            onClick={event => {
                if (isTouch) {
                     setIsHovering(true);
                     unActivateHover();

                     setTimeout(() => {
                        handleClick(event);
                    }, 300);
                }
                else {
                    handleClick(event);
                }
                
                
            }}
        >
            <div className={`UudisLehtBigTile-pilt ${isHovering ? 'hovering' : ''}`}>
                <img src={pilt} />
            </div>

            <div className={`UudisLehtBigTile-kirjeldus ${isHovering ? 'hovering' : ''}`}>
                <div className='UudisLehtBigTile-date'>{date}</div>

                <div className={`UudisLehtBigTile-title ${isHovering ? 'hovering' : ''}`}>{title}</div>

                <div className='UudisLehtBigTile-text'>
                    {shortenText(normalText, wordLimit)}

                </div>
            </div>
            
            
            

        </div>
    );
}