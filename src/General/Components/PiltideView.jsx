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



function Interactable({normalIcon, activatedIcon, handleClick}) {
    const [icon, setIcon] = useState(normalIcon);

    return (
        <img
            className='PiltideView-interactable'
            onMouseEnter={() => setIcon(activatedIcon)}
            onMouseLeave={() => setIcon(normalIcon)}  
            onClick={handleClick}
            src={icon}         
        />
    );
}

export default function PiltideView({curIndex, piltideCount, pilt, leftFunction, rightFunction, quitFunction}) {
    
    return (
        <div className='PiltideView-container'>
            <div className='PiltideView-bg' />
            <img className='PiltideView-pilt' src={pilt}/>

            <div className='PiltideView-leftArrow'><Interactable normalIcon={arrowLeft} activatedIcon={arrowLeftActivated} handleClick={leftFunction}/></div>
            <div className='PiltideView-rightArrow'><Interactable normalIcon={arrowRight} activatedIcon={arrowRightActivated} handleClick={rightFunction}/></div>
            <div className='PiltideView-quitIcon'><Interactable normalIcon={quitIcon} activatedIcon={quitIconActivated}handleClick={quitFunction}/></div>

            <div className='PiltideView-kirjeldus'>
                <div className='PiltideView-text'>{pilt.split('/').pop().replace(/\.[^/.]+$/, '')}</div>
                <div className='PiltideView-text'>({curIndex+1}/{piltideCount})</div> 
            </div>
        
        </div>
        
    );

}