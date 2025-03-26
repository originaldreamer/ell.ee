import { useState, useEffect } from 'react'
import './PageNavigatorButtons.css'
import '../../index.css'



//imported design elements
import arrowLeft from '../Design Elements/arrow left black.svg';
import arrowLeftActivated from '../Design Elements/arrow left yellow.svg';
import arrowRight from '../Design Elements/arrow right black.svg';
import arrowRightActivated from '../Design Elements/arrow right yellow.svg';



function NumberNupp({number, curSelectedIndex, handleClick})
{


    return (
      <div
        className={`PageNavigatorButtons-nupp ${curSelectedIndex === number-1 ? 'selected' : ''}`}
        onClick={() => handleClick(number-1)}
      >
        <div className='long-small-header'>{number}</div>
      </div>
    );
}

function ArrowNupp({normalArrow, arrowActivated, curSelectedIndex, indexToDeactivate, handleClick})
{
    const [icon, setIcon] = useState(normalArrow);

    const handleMouseEnter = () => {
      if (curSelectedIndex != indexToDeactivate)
      {
        setIcon(arrowActivated)
      }
      
    };

    const handleMouseLeave = () => {
      setIcon(normalArrow)
    };


    return (
      <div
        className={curSelectedIndex != indexToDeactivate ? 'PageNavigatorButtons-nupp' : 'PageNavigatorButtons-nupp-deactivated'}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
