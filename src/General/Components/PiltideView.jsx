import { useState } from 'react';
import '../../index.css';
import './PiltideView.css'



//imported elements
import arrowLeft from '../Design Elements/arrow left white.svg';
import arrowLeftActivated from '../Design Elements/arrow left yellow.svg';
import arrowRight from '../Design Elements/arrow right white.svg';
import arrowRightActivated from '../Design Elements/arrow right yellow.svg';
import quitIcon from '../Design Elements/quit icon.svg';
import quitIconActivated from '../Design Elements/quit icon activated.svg';
import useIsTouchDevice from '/src/hooks/useIsTouchDevice.jsx';




function Interactable({normalIcon, activatedIcon, handleClick}) {
    const [icon, setIcon] = useState(normalIcon); 
    const isTouch = useIsTouchDevice();

    return ( 
        <img
            className='PiltideView-interactable'
            onMouseEnter={!isTouch ? () => setIcon(activatedIcon) : undefined} // Apply only if not touch
            onMouseLeave={!isTouch ? () => setIcon(normalIcon) : undefined}
            onTouchStart={isTouch ? () => setIcon(activatedIcon) : undefined} // Apply only if touch
            onTouchEnd={isTouch ? () => setIcon(normalIcon) : undefined}
            onTouchCancel={isTouch ? () => setIcon(normalIcon) : undefined}
            onClick={handleClick}
            src={icon}         
        /> 
    ); 
}

export default function PiltideView({curIndex, piltideCount, pilt, leftFunction, rightFunction, quitFunction}) {
    const isTouch = useIsTouchDevice();

    return (
        <div className='PiltideView-container'>
            <div className='PiltideView-bg' />
            {isTouch && <div className='PiltideView-hiddenQuitButton' onClick={quitFunction}/>}

            <img className='PiltideView-pilt' src={pilt}/>

            {piltideCount > 1 && <div className='PiltideView-leftArrow'><Interactable normalIcon={arrowLeft} activatedIcon={arrowLeftActivated} handleClick={leftFunction}/></div>}
            {piltideCount > 1 && <div className='PiltideView-rightArrow'><Interactable normalIcon={arrowRight} activatedIcon={arrowRightActivated} handleClick={rightFunction}/></div>}
            <div className='PiltideView-quitIcon'><Interactable normalIcon={quitIcon} activatedIcon={quitIconActivated}handleClick={quitFunction}/></div>

            <div className='PiltideView-kirjeldus'>
                <div className='PiltideView-text'>{pilt.split('/').pop().replace(/\.[^/.]+$/, '').replace(/_/g, ' ').split('-')[0]}</div>
                <div className='PiltideView-text'>({curIndex+1}/{piltideCount})</div> 
            </div>
        
        </div>
         
    );

}