import { useState } from 'react'
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';



import './UudisedBigTile.css';
import '../../index.css'

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

export default function UudisedBigTile({pilt, date, title, sisu}) {
    const [isHovering, setIsHovering] = useState(false);
    const wordLimit = 15;
    const normalText = extractNormalText(sisu);

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

    return (
        <div className='UudisedBigTile-container'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className={`UudisedBigTile-pilt ${isHovering ? 'hovering' : ''}`}>
                <img src={pilt} />
            </div>

            <div className={`UudisedBigTile-kirjeldus ${isHovering ? 'hovering' : ''}`}>
                <div className='UudisedBigTile-date'>{date}</div>

                <div className={`UudisedBigTile-title ${isHovering ? 'hovering' : ''}`}>{title}</div>

                <div className='UudisedBigTile-text'>
                    {shortenText(normalText, wordLimit)}

                </div>
            </div>
            
            
            

        </div>
    );
}