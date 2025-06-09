import { useState, useEffect } from 'react'
import './PageNavigatorButtons.css'
import '../../index.css'
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';


//imported design elements
import arrowLeft from '../Design Elements/arrow left black.svg';
import arrowLeftActivated from '../Design Elements/arrow left yellow.svg';
import arrowRight from '../Design Elements/arrow right black.svg';
import arrowRightActivated from '../Design Elements/arrow right yellow.svg';



function NumberNupp({number, curSelectedIndex, handleClick})
{
    const isTouch = useIsTouchDevice();
    const [isHovering, setIsHovering] = useState(false);

    return (
      <div
        className={`PageNavigatorButtons-nupp ${curSelectedIndex === number-1 ? 'selected' : isHovering ? 'hover' : ''}`}
        onMouseEnter={!isTouch ? () => setIsHovering(true)  : undefined} 
        onMouseLeave={!isTouch ? () => setIsHovering(false)  : undefined} 
        onTouchStart={isTouch ? () => setIsHovering(true)  : undefined}
        onTouchEnd={isTouch ? () => setIsHovering(false)  : undefined}
        onTouchCancel={isTouch ? () => setIsHovering(false) : undefined} 
        onClick={() => handleClick(number-1)}
      >
        <div className='PageNavigorButtons-text'>{number}</div>
      </div> 
    );
}

function ArrowNupp({normalArrow, arrowActivated, curSelectedIndex, indexToDeactivate, handleClick})
{
    const isTouch = useIsTouchDevice();
    const [icon, setIcon] = useState(normalArrow);
    const [isHovering, setIsHovering] = useState(false);
 
    const handleMouseEnter = () => {
      
      if (curSelectedIndex != indexToDeactivate)
      {
        setIsHovering(true);
        setIcon(arrowActivated)
      }
      
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIcon(normalArrow)
    };


    return (
      <div
        className={
          curSelectedIndex !== indexToDeactivate
            ? `PageNavigatorButtons-nupp${isHovering ? ' hover' : ''}`
            : 'PageNavigatorButtons-nupp-deactivated'
        }
        onClick={handleClick}
        onMouseEnter={!isTouch ? handleMouseEnter : undefined} 
        onMouseLeave={!isTouch ? handleMouseLeave : undefined} 
        onTouchStart={isTouch ? handleMouseEnter : undefined}
        onTouchEnd={isTouch ? handleMouseLeave : undefined}
        onTouchCancel={isTouch ? handleMouseLeave : undefined} 
      >
        <img src={icon} style={indexToDeactivate==0 ? { marginRight: '1.5px' } : { marginLeft: '1.5px'}}/>
      </div>
    );
}




export default function PageNavigatorButtons({curSelectedIndex, setPageIndex, nuppudeCount, leftArrowFunction, righArrowFunction }) {

  return nuppudeCount > 1 ?(
      <div className='PageNavigatorButtons-container'>
        
        <ArrowNupp 
          normalArrow={arrowLeft}
          arrowActivated={arrowLeftActivated}
          indexToDeactivate={0}
          curSelectedIndex={curSelectedIndex}
          handleClick={leftArrowFunction}
        />

        {curSelectedIndex > 1 &&
          <NumberNupp number="1" curSelectedIndex={curSelectedIndex} handleClick={setPageIndex}/>
        }

        {curSelectedIndex > 2 && <div className='long-sub-header' style={{marginTop:'8.5px'}}>...</div>}

        {
          (() => {
            const items = [];
            for (let i = Math.max(curSelectedIndex, 1); i <= Math.min(curSelectedIndex + 2, nuppudeCount); i++) {
              items.push(
                <NumberNupp
                  key={i}
                  number={i}
                  curSelectedIndex={curSelectedIndex}
                  handleClick={setPageIndex}
                />
              );
            }
            return items;
          })()
        }

{curSelectedIndex < nuppudeCount-3 && <div className='long-sub-header' style={{marginTop:'8.5px'}}>...</div>}
        
      
        
        {curSelectedIndex < nuppudeCount-2 && 
          <NumberNupp number={nuppudeCount} curSelectedIndex={curSelectedIndex} handleClick={setPageIndex}/>
        }

        <ArrowNupp
          normalArrow={arrowRight}
          arrowActivated={arrowRightActivated}
          indexToDeactivate={nuppudeCount-1}
          curSelectedIndex={curSelectedIndex}
          handleClick={righArrowFunction}
        />

        



          
          
      </div>
    
  ) : null;
}
